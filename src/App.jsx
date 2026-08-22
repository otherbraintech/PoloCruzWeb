import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import { useBrandHeader } from './hooks/useBrandHeader';

// Polo Cruz Pages
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

// Mil Sabores
import { MilSaboresCartProvider } from '@/context/MilSaboresCartContext';
import MilSaboresNavbar from '@/components/milsabores/Navbar';
import MilSaboresCartDrawer from '@/components/milsabores/CartDrawer';
import FlavorScroll from '@/components/milsabores/FlavorScroll';
import MilSaboresHome from '@/pages/milsabores/MilSaboresHome';
import MilSaboresProductDetail from '@/pages/milsabores/MilSaboresProductDetail';
import MilSaboresCheckout from '@/pages/milsabores/MilSaboresCheckout';

// Torta Express
import { TortaExpressCartProvider } from '@/context/TortaExpressCartContext';
import FloatingCart from '@/components/tortaexpress/FloatingCart';
import TortaExpressCartDrawer from '@/components/tortaexpress/CartDrawer';
import TortaExpressHome from '@/pages/tortaexpress/TortaExpressHome';
import TortaExpressDetail from '@/pages/tortaexpress/TortaExpressDetail';

// Layout Wrappers
function MilSaboresLayout({ children }) {
  return (
    <MilSaboresCartProvider>
      <FlavorScroll />
      <MilSaboresNavbar />
      <MilSaboresCartDrawer />
      <div className="theme-milsabores min-h-screen bg-[#2B2620]">
        {children}
      </div>
    </MilSaboresCartProvider>
  );
}

function TortaExpressLayout({ children }) {
  return (
    <TortaExpressCartProvider>
      <div className="theme-tortaexpress min-h-screen bg-[hsl(var(--background))]">
        {children}
        <FloatingCart />
        <TortaExpressCartDrawer />
      </div>
    </TortaExpressCartProvider>
  );
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  useBrandHeader();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0D3D5C]">
        <div className="w-10 h-10 border-4 border-[#2AACE2]/30 border-t-[#2AACE2] rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      {/* Polo Cruz routes */}
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<Home />} />
      <Route path="/contacto" element={<Home />} />

      {/* Mil Sabores routes */}
      <Route path="/milsabores" element={<MilSaboresLayout><MilSaboresHome /></MilSaboresLayout>} />
      <Route path="/mil-sabores" element={<MilSaboresLayout><MilSaboresHome /></MilSaboresLayout>} />
      <Route path="/mil_sabores" element={<MilSaboresLayout><MilSaboresHome /></MilSaboresLayout>} />
      <Route path="/milsabores/producto/:slug" element={<MilSaboresLayout><MilSaboresProductDetail /></MilSaboresLayout>} />
      <Route path="/mil-sabores/producto/:slug" element={<MilSaboresLayout><MilSaboresProductDetail /></MilSaboresLayout>} />
      <Route path="/mil_sabores/producto/:slug" element={<MilSaboresLayout><MilSaboresProductDetail /></MilSaboresLayout>} />
      <Route path="/milsabores/checkout" element={<MilSaboresLayout><MilSaboresCheckout /></MilSaboresLayout>} />
      <Route path="/mil-sabores/checkout" element={<MilSaboresLayout><MilSaboresCheckout /></MilSaboresLayout>} />
      <Route path="/mil_sabores/checkout" element={<MilSaboresLayout><MilSaboresCheckout /></MilSaboresLayout>} />

      {/* Torta Express routes */}
      <Route path="/tortaexpress" element={<TortaExpressLayout><TortaExpressHome /></TortaExpressLayout>} />
      <Route path="/torta-express" element={<TortaExpressLayout><TortaExpressHome /></TortaExpressLayout>} />
      <Route path="/torta_express" element={<TortaExpressLayout><TortaExpressHome /></TortaExpressLayout>} />
      <Route path="/tortaexpress/torta/:id" element={<TortaExpressLayout><TortaExpressDetail /></TortaExpressLayout>} />
      <Route path="/torta-express/torta/:id" element={<TortaExpressLayout><TortaExpressDetail /></TortaExpressLayout>} />
      <Route path="/torta_express/torta/:id" element={<TortaExpressLayout><TortaExpressDetail /></TortaExpressLayout>} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;