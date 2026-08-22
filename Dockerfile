# Multi-stage Dockerfile for Polo Cruz Taste Web Application

# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build production assets
RUN npm run build

# Stage 2: Production runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy compiled assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Install lightweight SPA static server
RUN npm install -g serve

# Default environment variable for application port
ENV PORT=5173

# Expose port 5173 (customizable via -e PORT=xxxx when running container)
EXPOSE 5173

# Run static server with SPA fallback (-s) listening on $PORT
CMD ["sh", "-c", "serve -s dist -l ${PORT:-5173}"]
