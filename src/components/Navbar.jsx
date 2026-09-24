import React, { useState, useEffect } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] border-b transition-all duration-300 ease-smooth ${
        isScrolled
          ? 'py-3 bg-bg/85 backdrop-blur-md border-border'
          : 'py-5 border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <button
          className="text-[1.05rem] font-semibold -tracking-[0.01em] text-text"
          onClick={() => scrollToSection('hero')}
        >
          Sumit Verma<span className="text-accent"></span>
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  className="text-[0.92rem] text-text-muted py-1 transition-colors duration-200 ease-smooth hover:text-text"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-[34px] h-[34px]"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-[1.5px] w-[22px] bg-text transition-transform duration-[250ms] ease-smooth ${
              isMenuOpen ? 'translate-y-[3.75px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-[1.5px] w-[22px] bg-text transition-transform duration-[250ms] ease-smooth ${
              isMenuOpen ? '-translate-y-[3.75px] -rotate-45' : ''
            }`}
          ></span>
        </button>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-raised border-b border-border overflow-hidden transition-[max-height] duration-300 ease-smooth ${
            isMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <ul className="px-[6%] py-3">
            {links.map((link) => (
              <li key={link.id} className="border-b border-border last:border-b-0">
                <button
                  className="w-full text-left text-text-muted py-3.5 text-[0.95rem] hover:text-accent-strong"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
