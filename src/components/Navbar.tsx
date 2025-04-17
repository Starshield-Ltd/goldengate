
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';
import { ChevronDown, GraduationCap, BookOpen, Briefcase, Home, Info, Image, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const actionsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target as Node) &&
        actionsDropdownRef.current &&
        !actionsDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
        <nav className="hidden md:flex items-center space-x-3">
          <Link to="/" className="nav-link text-xs md:text-sm flex items-center">
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>

          {isHomePage ? (
            <a href="#about" className="nav-link text-xs md:text-sm flex items-center"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Info className="w-3.5 h-3.5 mr-1" />
              <span>About</span>
            </a>
          ) : (
            <Link to="/#about" className="nav-link text-xs md:text-sm flex items-center">
              <Info className="w-3.5 h-3.5 mr-1" />
              <span>About</span>
            </Link>
          )}

          {isHomePage ? (
            <a href="#gallery" className="nav-link text-xs md:text-sm flex items-center"
              onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Image className="w-3.5 h-3.5 mr-1" />
              <span>Gallery</span>
            </a>
          ) : (
            <Link to="/#gallery" className="nav-link text-xs md:text-sm flex items-center">
              <Image className="w-3.5 h-3.5 mr-1" />
              <span>Gallery</span>
            </Link>
          )}

          <Link to="/ghanaian-education" className="nav-link text-xs md:text-sm flex items-center">
            <GraduationCap className="w-3.5 h-3.5 mr-1" />
            <span>Education</span>
          </Link>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesDropdownRef}>
            <button
              className={cn(
                "nav-link text-xs md:text-sm flex items-center",
                activeDropdown === 'resources' ? 'text-school-yellow' : ''
              )}
              onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
            >
              <BookOpen className="w-3.5 h-3.5 mr-1" />
              <span>Resources</span>
              <ChevronDown className={cn(
                "w-3.5 h-3.5 ml-1 transition-transform duration-200",
                activeDropdown === 'resources' ? 'rotate-180' : ''
              )} />
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg py-2 z-50 border border-gray-200">
                <Link
                  to="/stem-resources"
                  className="block px-4 py-2 text-xs text-gray-800 hover:bg-school-yellow/10 hover:text-school-blue transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  STEM Resources
                </Link>
                <Link
                  to="/golden-resources"
                  className="block px-4 py-2 text-xs text-gray-800 hover:bg-school-yellow/10 hover:text-school-blue transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  Golden Resources
                </Link>
                <Link
                  to="/ai-search"
                  className="block px-4 py-2 text-xs text-gray-800 hover:bg-school-yellow/10 hover:text-school-blue transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  AI Search
                </Link>
              </div>
            )}
          </div>

          {isHomePage ? (
            <a href="#contact" className="nav-link text-xs md:text-sm flex items-center"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Phone className="w-3.5 h-3.5 mr-1" />
              <span>Contact</span>
            </a>
          ) : (
            <Link to="/#contact" className="nav-link text-xs md:text-sm flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1" />
              <span>Contact</span>
            </Link>
          )}

          {/* Actions Dropdown */}
          <div className="relative" ref={actionsDropdownRef}>
            <button
              className={cn(
                "ml-2 px-3 py-1.5 rounded-md text-xs md:text-sm flex items-center bg-gradient-to-r from-school-blue to-school-yellow text-white hover:opacity-90 transition-all duration-300",
                activeDropdown === 'actions' ? 'opacity-90' : ''
              )}
              onClick={() => setActiveDropdown(activeDropdown === 'actions' ? null : 'actions')}
            >
              <Briefcase className="w-3.5 h-3.5 mr-1" />
              <span>Quick Actions</span>
              <ChevronDown className={cn(
                "w-3.5 h-3.5 ml-1 transition-transform duration-200",
                activeDropdown === 'actions' ? 'rotate-180' : ''
              )} />
            </button>

            {activeDropdown === 'actions' && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg py-2 z-50 border border-gray-200">
                <Link
                  to="/enroll-now"
                  className="block px-4 py-2 text-xs text-gray-800 hover:bg-school-yellow/10 hover:text-school-blue transition-colors font-medium"
                  onClick={() => setActiveDropdown(null)}
                >
                  Enroll Now
                </Link>
                <Link
                  to="/apply-for-job"
                  className="block px-4 py-2 text-xs text-gray-800 hover:bg-school-yellow/10 hover:text-school-blue transition-colors font-medium"
                  onClick={() => setActiveDropdown(null)}
                >
                  Apply for Job
                </Link>
              </div>
            )}
          </div>
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
        isMenuOpen ? "max-h-[500px] border-b border-white/20" : "max-h-0"
      )}>
        <nav className="flex flex-col space-y-2 px-4 py-4">
          <Link
            to="/"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="w-3.5 h-3.5 mr-2" />
            Home
          </Link>
          {isHomePage ? (
            <a
              href="#about"
              className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <Info className="w-3.5 h-3.5 mr-2" />
              About
            </a>
          ) : (
            <Link
              to="/#about"
              className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="w-3.5 h-3.5 mr-2" />
              About
            </Link>
          )}

          {isHomePage ? (
            <a
              href="#gallery"
              className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <Image className="w-3.5 h-3.5 mr-2" />
              Gallery
            </a>
          ) : (
            <Link
              to="/#gallery"
              className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image className="w-3.5 h-3.5 mr-2" />
              Gallery
            </Link>
          )}
          <Link
            to="/ghanaian-education"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <GraduationCap className="w-3.5 h-3.5 mr-2" />
            Education
          </Link>

          {/* Resources Section */}
          <div className="px-3 py-1.5 text-white/90 text-xs font-semibold border-t border-white/10 pt-3 mt-2">Resources</div>

          <Link
            to="/stem-resources"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center pl-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-school-yellow mr-2"></div>
            STEM Resources
          </Link>
          <Link
            to="/golden-resources"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center pl-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-school-yellow mr-2"></div>
            Golden Resources
          </Link>
          <Link
            to="/ai-search"
            className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center pl-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-school-yellow mr-2"></div>
            AI Search
          </Link>

          {isHomePage ? (
            <a
              href="#contact"
              className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center mt-2"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              Contact
            </a>
          ) : (
            <Link
              to="/#contact"
              className="px-3 py-1.5 text-white hover:bg-white/10 rounded-md transition-all duration-300 text-xs flex items-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              Contact
            </Link>
          )}

          {/* Actions Section */}
          <div className="px-3 py-1.5 text-white/90 text-xs font-semibold border-t border-white/10 pt-3 mt-2">Quick Actions</div>

          <Link
            to="/enroll-now"
            className="px-3 py-1.5 bg-white text-school-blue font-semibold rounded-md hover:bg-white/90 transition-all duration-300 text-xs flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-school-blue mr-2"></div>
            Enroll Now
          </Link>
          <Link
            to="/apply-for-job"
            className="px-3 py-1.5 bg-gradient-to-r from-school-blue to-school-yellow text-white font-semibold rounded-md hover:opacity-90 transition-all duration-300 text-xs flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Briefcase className="w-3.5 h-3.5 mr-2" />
            Apply for Job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
