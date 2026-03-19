import React from 'react';

type PlatformLogo =
  | {
      id: string;
      kind: 'image';
      alt: string;
      src: string;
      imageClassName?: string;
    }
  | {
      id: string;
      kind: 'lockup';
      alt: string;
      iconSrc: string;
      label?: string;
      labelSrc?: string;
      iconClassName?: string;
      labelClassName?: string;
      labelImageClassName?: string;
    };

const PLATFORM_LOGOS: PlatformLogo[] = [
  {
    id: 'chatgpt',
    kind: 'lockup',
    alt: 'ChatGPT',
    iconSrc: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/ChatGPT-Logo.svg',
    iconClassName: 'h-[0.82em] w-[0.82em] shrink-0 chatgpt-green-logo',
    label: 'ChatGPT',
    labelClassName: 'text-[0.68em] font-semibold tracking-tight text-[#10A37F]',
  },
  {
    id: 'perplexity',
    kind: 'image',
    alt: 'Perplexity AI',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Perplexity_AI_logo.svg',
    imageClassName: 'h-[0.74em] w-auto',
  },
  {
    id: 'gemini',
    kind: 'image',
    alt: 'Google Gemini',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Google_Gemini_logo_2025.svg',
    imageClassName: 'h-[0.6em] w-auto',
  },
  {
    id: 'grok',
    kind: 'image',
    alt: 'Grok',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Grok-feb-2025-logo.svg',
    imageClassName: 'h-[0.66em] w-auto',
  },
  {
    id: 'claude',
    kind: 'image',
    alt: 'Claude AI',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Claude_AI_logo.svg',
    imageClassName: 'h-[0.7em] w-auto',
  },
];

export const PlatformLogoRotator: React.FC = () => {
  const [platformIndex, setPlatformIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setPlatformIndex((current) => (current + 1) % PLATFORM_LOGOS.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  const platform = PLATFORM_LOGOS[platformIndex];

  return (
    <>
      <span className="relative inline-flex min-h-[1em] min-w-[220px] md:min-w-[290px] items-center justify-start align-middle">
        <span key={platform.id} className="inline-flex items-center animate-platform-fade">
          {platform.kind === 'image' ? (
            <img
              src={platform.src}
              alt={platform.alt}
              className={platform.imageClassName ?? 'h-[0.72em] w-auto'}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="inline-flex items-center gap-[0.22em]">
              <img
                src={platform.iconSrc}
                alt={platform.alt}
                className={platform.iconClassName ?? 'h-[0.82em] w-[0.82em]'}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              {platform.labelSrc ? (
                <img
                  src={platform.labelSrc}
                  alt=""
                  aria-hidden="true"
                  className={platform.labelImageClassName ?? 'h-[0.48em] w-auto'}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className={platform.labelClassName ?? 'text-[0.7em] font-semibold tracking-tight text-text-primary'}>
                  {platform.label}
                </span>
              )}
            </span>
          )}
        </span>
      </span>

      <style>{`
        @keyframes platform-fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          15%,
          85% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-platform-fade {
          animation: platform-fade 1.8s ease both;
        }

        .chatgpt-green-logo {
          filter: brightness(0) saturate(100%) invert(44%) sepia(79%) saturate(575%) hue-rotate(118deg) brightness(92%) contrast(96%);
        }
      `}</style>
    </>
  );
};
