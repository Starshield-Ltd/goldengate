
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 py-2 w-full',
        isScrolled
          ? 'bg-gradient-to-r from-school-blue/90 to-school-yellow/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="w-full mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ImageWithLoader
            src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.41.51_a712a956.jpg"
            alt="Golden Gate Int. School Logo"
            className="w-10 h-10 rounded-full object-cover"
            containerClassName="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30"
            priority
          />
          <div className="flex flex-col">
            <span className={cn(
              "font-heading font-semibold transition-all duration-300",
              isScrolled ? "text-white text-base drop-shadow-md" : "text-white text-lg drop-shadow-md",
            )}>
              Golden Gate <span className="text-school-yellow">Int. School</span> <span className="text-xs">(GOGAINS)</span>
            </span>
            <span className={cn(
              "text-xs font-medium italic transition-all duration-300",
              isScrolled ? "text-school-yellow/90" : "text-school-yellow",
            )}>
              Gateway to Success
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link text-xs md:text-sm">Home</Link>
          <a href="#about" className="nav-link text-xs md:text-sm" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
          <a href="#gallery" className="nav-link text-xs md:text-sm" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Gallery</a>
          <Link to="/ghanaian-education" className="nav-link text-xs md:text-sm">Education</Link>
          <Link to="/stem-resources" className="nav-link text-xs md:text-sm">STEM Resources</Link>
          <Link to="/golden-resources" className="nav-link text-xs md:text-sm">Golden Resources</Link>
          <Link to="/ai-search" className="nav-link text-xs md:text-sm">AI Search</Link>
          <a href="#contact" className="nav-link text-xs md:text-sm" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
          <Link
            to="/enroll-now"
            className="ml-4 btn-secondary text-xs md:text-sm"
          >
            Enroll Now
          </Link>
          <Link
            to="/apply-for-job"
            className="ml-2 btn-primary text-xs md:text-sm"
          >
            Apply for Job
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 bg-gradient-to-r from-school-blue/95 to-school-yellow/95 backdrop-blur-lg shadow-lg transition-all duration-500 overflow-hidden",
        isMenuOpen ? "max-h-96 border-b border-white/20" : "max-h-0"
      )}>
        <nav className="flex flex-col space-y-2 px-4 py-4">
          <Link
            to="/"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#gallery"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            Gallery
          </a>
          <Link
            to="/ghanaian-education"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/stem-resources"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            STEM Resources
          </Link>
          <Link
            to="/golden-resources"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            Golden Resources
          </Link>
          <Link
            to="/ai-search"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            AI Search
          </Link>
          <a
            href="#contact"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
          <Link
            to="/enroll-now"
            className="px-3 py-1.5 bg-white text-school-blue font-semibold rounded-md hover:bg-white/90 transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            Enroll Now
          </Link>
          <Link
            to="/apply-for-job"
            className="mt-2 px-3 py-1.5 bg-gradient-to-r from-school-blue to-school-yellow text-white font-semibold rounded-md hover:opacity-90 transition-all duration-300 text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply for Job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
