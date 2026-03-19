import React, { useEffect } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'base' | 'surface' | 'elevated' | 'grid';
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'base',
  containerClassName,
}) => {
  const bgClasses = {
    base: 'bg-bg-base',
    surface: 'bg-bg-surface',
    elevated: 'bg-bg-elevated',
    grid: 'bg-bg-base grid-bg',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-section overflow-hidden relative',
        bgClasses[background],
        className
      )}
    >
      <div className={cn('container-custom relative z-10', containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn('reveal', className)}>
      {children}
    </div>
  );
};
