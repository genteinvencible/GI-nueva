import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Drugs', href: '#drugs' },
    { name: 'About', href: '#about' },
    { name: 'Entrar', href: '#entrar' },
  ];

  return (
    <>
      {/* Dock flotante en la parte superior */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white border-[1px] border-neutral-200 border-t-white/40 border-b-black/10 rounded-full shadow-lg shadow-black/5 px-2 py-2 backdrop-blur-md">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ease-out
                  ${activeItem === item.name
                    ? 'bg-neutral-900 text-white font-bold'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                  }
                `}
                style={{ fontFamily: 'Suisse, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
