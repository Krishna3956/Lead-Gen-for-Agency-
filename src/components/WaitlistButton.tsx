import React from 'react';
import { createPortal } from 'react-dom';

type WaitlistButtonProps = {
  children: React.ReactNode;
  className: string;
  modalTitle?: React.ReactNode;
  modalDescription?: string;
};

export const WaitlistButton: React.FC<WaitlistButtonProps> = ({
  children,
  className,
  modalTitle = <>Join the <span className="text-accent">waitlist.</span></>,
  modalDescription = "Enter your business email and we'll reach out when your spot opens.",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const modal = isOpen ? (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
      <button
        type="button"
        aria-label="Close waitlist popup"
        className="absolute inset-0 bg-text-primary/45 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-10 w-full max-w-[520px] rounded-[32px] border border-border-subtle bg-white p-8 md:p-10 shadow-[0_30px_120px_rgba(15,23,42,0.2)]">
        <button
          type="button"
          className="absolute right-5 top-5 text-text-muted transition-colors hover:text-text-primary"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent mb-6">
          <span>Waitlist</span>
        </div>
        <h3 className="text-[34px] md:text-[40px] font-display font-medium text-text-primary leading-[1.05] tracking-tight mb-4">
          {modalTitle}
        </h3>
        <p className="text-[18px] text-text-secondary leading-relaxed mb-8">
          {modalDescription}
        </p>

        <form
          action="https://formspree.io/f/mqakpjne"
          method="POST"
          className="space-y-4"
        >
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
          <input
            type="email"
            name="email"
            required
            className="w-full h-14 rounded-[20px] border border-border-subtle bg-bg-surface px-5 text-[16px] text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent"
            placeholder="Enter your business email"
          />
          <button type="submit" className="w-full h-14 rounded-[20px] bg-accent text-white text-[16px] font-bold transition-all hover:bg-accent/90">
            Join the Waitlist
          </button>
        </form>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(true);
        }}
        className={className}
      >
        {children}
      </button>

      {isMounted ? createPortal(modal, document.body) : null}
    </>
  );
};
