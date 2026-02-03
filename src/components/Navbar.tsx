import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Emails', href: '#emails' },
    { name: 'Drugs', href: '#drugs' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcfb]/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl lg:text-2xl font-bold text-neutral-900 hover:text-neutral-700 transition-colors" style={{ fontFamily: 'Suisse, sans-serif' }}>
              Gente Invencible
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-normal text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#entrar"
              className="px-6 py-2.5 bg-neutral-900 text-white text-lg font-normal hover:bg-neutral-800 transition-colors"
            >
              Entrar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#fdfcfb] border-t border-neutral-200">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-normal text-neutral-700 hover:text-neutral-900 transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#entrar"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-6 py-2.5 bg-neutral-900 text-white text-base font-normal hover:bg-neutral-800 transition-colors mt-4"
            >
              Entrar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
