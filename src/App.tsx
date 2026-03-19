import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Home } from '@/src/pages/Home';
import { HowItWorks } from '@/src/pages/HowItWorks';
import { Pricing } from '@/src/pages/Pricing';
import { BookDemo } from '@/src/pages/BookDemo';
import { About } from '@/src/pages/About';
import { FreeAudit } from '@/src/pages/FreeAudit';
import { Resources } from '@/src/pages/Resources';
import { Contact } from '@/src/pages/Contact';
import { Legal } from '@/src/pages/Legal';
import { Changelog } from '@/src/pages/Changelog';
import { FeatureDetail } from '@/src/pages/FeatureDetail';
import { UseCaseDetail } from '@/src/pages/UseCaseDetail';
import { CityDetail } from '@/src/pages/CityDetail';
import { ComparisonDetail } from '@/src/pages/ComparisonDetail';
import { BlogDetail } from '@/src/pages/BlogDetail';
import { SignIn } from '@/src/pages/SignIn';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell />
    </Router>
  );
}

const AppShell = () => {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === '/sign-in';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthRoute && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/blog" element={<Resources />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/features/:id" element={<FeatureDetail />} />
          <Route path="/use-cases/:id" element={<UseCaseDetail />} />
          <Route path="/compare/:id" element={<ComparisonDetail />} />
          <Route path="/city/:id" element={<CityDetail />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/security" element={<Legal />} />
          <Route path="/cookies" element={<Legal />} />
          <Route path="/refund-policy" element={<Legal />} />
          <Route path="/results" element={<Legal />} />
          <Route path="/help" element={<Legal />} />
          <Route path="/roi-calculator" element={<Pricing />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/thank-you" element={<Legal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isAuthRoute && <Footer />}
    </div>
  );
};
