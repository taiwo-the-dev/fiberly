interface LogoProps {
  size?: number;
  className?: string;
}

export const LogoMark: React.FC<LogoProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="18" fill="#0F3D2A" />
    <circle cx="32" cy="32" r="19" stroke="#1E9E5A" strokeWidth="5" opacity=".35" />
    <path d="M32 13a19 19 0 0 1 16.5 28.5" stroke="#F5A524" strokeWidth="5" strokeLinecap="round" />
    <path
      d="M32 46V25M32 33c-5 0-8-3-8-7 5 0 8 3 8 7ZM32 33c5 0 8-3 8-7-5 0-8 3-8 7ZM32 41c-4 0-6.500-2.500-6.500-5.500 4 0 6.500 2.500 6.500 5.500ZM32 41c4 0 6.500-2.500 6.500-5.500-4 0-6.500 2.500-6.500 5.500Z"
      stroke="#fff"
      strokeWidth="2.600"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Logo: React.FC<{ light?: boolean; size?: number }> = ({ light = false, size = 40 }) => (
  <div className="flex items-center gap-x-3">
    <LogoMark size={size} />
    <span className={`font-display font-extrabold text-3xl tracking-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
      Fibre<span className="text-accent">ly</span>
    </span>
  </div>
);

export default Logo;
