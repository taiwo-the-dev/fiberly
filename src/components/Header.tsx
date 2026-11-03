import Logo from './Logo';

const Header = () => {
  return (
    <header className='bg-brand-dark relative overflow-hidden'>
      <div className='absolute -right-10 -top-16 w-48 h-48 rounded-full bg-brand/30 blur-2xl' />
      <div className='relative flex justify-center md:justify-between items-center max-w-5xl mx-auto px-6 py-5'>
        <Logo light />
        <p className='hidden md:block text-brand-tint/80 text-sm'>Know your fibre. Feed your gut.</p>
      </div>
    </header>
  )
}

export default Header
