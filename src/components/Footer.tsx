import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-dark mt-20 py-8 relative z-10">
      <div className="flex flex-col items-center gap-y-2 text-brand-tint/80">
        <Logo light size={32} />
        <p className="text-sm">A fibre counter by <span className='text-accent font-semibold'>Aboutguts.com</span></p>
      </div>
    </footer>
  );
};

export default Footer;
