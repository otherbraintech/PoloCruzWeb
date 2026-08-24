# Configuración de Despliegue en Vercel (SPA Routing)

## Problema de Enrutamiento 404 en Subrutas

Al desplegar una aplicación web **Single Page Application (SPA)** basada en React y Vite (como `PoloCruzWeb`, `MilSabores` y `TortaExpress`), Vercel intenta buscar archivos estáticos coincidentes en el servidor para las URLs ingresadas directamente o al recargar la página (por ejemplo: `https://www.polocruz.com/tortaexpress` o `https://www.polocruz.com/milsabores`).

Dado que estas rutas son manejadas del lado del cliente por **React Router**, el servidor Vercel retorna una página de error `404: NOT_FOUND` si no existe una regla de *rewrite* (reescritura).

## Solución Implementada

Se ha creado la configuración `vercel.json` en la raíz del proyecto con la siguiente regla de reescritura:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### ¿Cómo funciona?
1. Todas las peticiones HTTP a cualquier subruta son redirigidas internamente hacia `/index.html`.
2. El servidor responde sirviendo `index.html` con código de estado HTTP 200.
3. React Router toma el control en el navegador y lee la subruta de la URL (`/tortaexpress`, `/milsabores`, etc.) renderizando el componente adecuado de forma transparente.
