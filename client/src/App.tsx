import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import NeighborhoodDetail from "@/pages/NeighborhoodDetail";
import Contact from "@/pages/Contact";
import Reviews from "@/pages/Reviews";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import ServiceAreas from "@/pages/ServiceAreas";
import FAQ from "@/pages/FAQ";
import Gallery from "@/pages/Gallery";
import PriceBeatGuaranteePage from "@/pages/PriceBeatGuaranteePage";
import Sitemap from "@/pages/Sitemap";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Feedback from "@/pages/Feedback";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/sc/:slug" component={NeighborhoodDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:slug" component={ProjectDetail} />
      <Route path="/pressure-washing-tips" component={Blog} />
      <Route path="/pressure-washing-tips/:slug" component={BlogDetail} />
      <Route path="/pressure-washing-faq" component={FAQ} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/price-beat-guarantee" component={PriceBeatGuaranteePage} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/feedback" component={Feedback} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
