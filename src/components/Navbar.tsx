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
        <div className="bg-[#111]/85 border-[0.5px] border-white/20 rounded-full shadow-xl shadow-black/20 px-2 py-2 backdrop-blur-md">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ease-out
                  ${activeItem === item.name
                    ? 'bg-white text-black font-bold'
                    : 'text-white hover:bg-neutral-800'
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
