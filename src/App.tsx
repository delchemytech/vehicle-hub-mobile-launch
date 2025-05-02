import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { initHotjar } from "./lib/hotjar";
import { initGA, trackPageView } from "./lib/ga";
import { logEvent } from "firebase/analytics";
import { analytics } from "./lib/firebase";

const queryClient = new QueryClient();

const HotjarTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      initHotjar();
    }
  }, []);

  useEffect(() => {
    if ((window as any).hj) {
      (window as any).hj("stateChange", location.pathname);
    }
  }, [location]);

  return null;
};

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      logEvent(analytics, "page_view", { page_path: location.pathname });
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HotjarTracker />
        <GoogleAnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
