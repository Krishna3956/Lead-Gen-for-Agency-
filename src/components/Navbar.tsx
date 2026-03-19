import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useCases } from '@/src/data/useCases';

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
        'fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 flex items-center bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm'
      )}
    >
      <div className="container-custom w-full flex items-center justify-between">
        <Link to="/" className="group inline-flex items-baseline gap-1.5">
          <span className="brand-wordmark text-[24px] transition-colors">
            Cognivo<span className="text-accent">.ai</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <UseCasesDropdown />
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/book-demo" className="h-11 px-6 rounded-2xl bg-accent text-white text-[14px] font-bold tracking-tight shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center">
            Join the Waitlist
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
        "text-[15px] font-medium transition-all",
        isActive ? "text-accent" : "text-text-secondary hover:text-accent"
      )}
    >
      {children}
    </Link>
  );
};

const UseCasesDropdown: React.FC = () => {
  const location = useLocation();
  const isActive = location.pathname.startsWith('/use-cases/');

  return (
    <div className="relative group">
      <button
        type="button"
        className={cn(
          'flex items-center gap-2 text-[15px] font-medium transition-all',
          isActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
        )}
      >
        <span>Use Cases</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="rounded-[28px] border border-border-subtle bg-white/95 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-2">
            {useCases.map((useCase) => (
              <Link
                key={useCase.id}
                to={`/use-cases/${useCase.id}`}
                className="rounded-[20px] border border-transparent bg-gradient-to-r from-white to-bg-surface px-4 py-4 transition-all hover:border-accent/15 hover:from-accent/5 hover:to-sky-50"
              >
                <div className="text-[15px] font-semibold tracking-tight text-text-primary">
                  {useCase.title}
                </div>
                <div className="mt-1 text-[13px] leading-relaxed text-text-secondary line-clamp-2">
                  {useCase.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
