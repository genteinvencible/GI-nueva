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
        <div className="bg-neutral-900 border-2 border-white rounded-full shadow-2xl px-2 py-2 backdrop-blur-xl">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  px-6 py-3 rounded-full text-base font-normal transition-all duration-300 ease-out
                  ${activeItem === item.name
                    ? 'bg-white text-neutral-900'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
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
