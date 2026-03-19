import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 flex items-center bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm'
      )}
    >
      <div className="container-custom w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-text-primary rounded-lg flex items-center justify-center transition-all group-hover:bg-accent shadow-lg shadow-slate-200">
            <div className="w-3.5 h-3.5 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-[18px] font-bold text-text-primary tracking-tight">Cited</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/blog">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/book-demo" className="btn-primary px-5 h-9 text-[13px] font-bold">
            Book Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        "text-[14px] font-medium transition-all",
        isActive ? "text-accent" : "text-text-secondary hover:text-accent"
      )}
    >
      {children}
    </Link>
  );
};
