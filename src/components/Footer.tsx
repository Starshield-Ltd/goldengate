
import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD700, #FFD700 2px, transparent 2px, transparent 20px)' }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-school-yellow/20 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-yellow/10 blur-xl"></div>
      <div className="absolute bottom-40 -left-20 w-48 h-48 rounded-full bg-school-yellow/10 blur-xl"></div>
      <div className="content-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ImageWithLoader
                src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.41.51_a712a956.jpg"
                alt="Golden Gate Int. School Logo"
                className="w-10 h-10 rounded-full object-cover"
                containerClassName="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30"
              />
              <span className="font-heading font-bold text-xl drop-shadow-md">
                Golden Gate <span className="text-school-yellow">Int. School</span>
              </span>
              <span className="text-xs font-medium italic text-school-yellow/90 block mt-1">
                Gateway to Success
              </span>
            </div>
            <p className="text-white/80 text-sm backdrop-blur-sm bg-school-blue/30 inline-block p-3 rounded-xl border border-school-yellow/30">
              Transforming education through technology and innovation, creating the next generation of IT leaders and digital innovators for Ghana and beyond.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/233246186629"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-school-blue to-school-yellow hover:from-school-yellow hover:to-school-blue transition-all duration-500 shadow-lg hover:scale-110 transform border border-school-yellow/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path
                    d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.043.433-.101.823z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-heading drop-shadow-md">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Gallery</a>
              </li>
              <li>
                <Link to="/ghanaian-education" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Education</Link>
              </li>
              <li>
                <Link to="/ai-search" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">AI Search</Link>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
              </li>
              <li>
                <a href="#contact" className="fixed bottom-8 right-8 w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-r from-school-blue/70 to-school-yellow/70 border border-white/20 flex items-center justify-center group hover:scale-110 transition-all duration-300 shadow-lg" onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 text-white transform transition-transform group-hover:scale-110 ${window.pageYOffset > 100 ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-heading drop-shadow-md">Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>Creche</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>Nursery</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>Kindergarten</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>Primary Education</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>Junior High School</a>
              </li>
              <li>
                <Link to="/enroll-now" className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Enroll Now</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-heading drop-shadow-md">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80 mt-0.5 group-hover:text-white transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80 text-sm group-hover:text-white transition-all duration-300">Afrancho, Kumasi, Ashanti Region, Ghana<br/>P.O. Box AH 2984</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80 mt-0.5 group-hover:text-white transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-white/90 text-sm font-medium group-hover:text-white transition-all duration-300">0246186629</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80 mt-0.5 group-hover:text-white transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-white/90 text-xs sm:text-sm break-all font-medium group-hover:text-white transition-all duration-300">goldengateintschool@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-school-yellow/30">
        <div className="content-container py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0 font-medium">
            &copy; {currentYear} Golden Gate Int. School. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-white/80">
            <Link to="/privacy" className="hover:text-school-yellow transition-all duration-300 hover:scale-105 transform">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-school-yellow transition-all duration-300 hover:scale-105 transform">Terms of Service</Link>
          </div>
        </div>
        <div className="overflow-hidden bg-gradient-to-r from-school-blue/90 to-school-blue/80 py-4 border-t border-school-yellow/30 backdrop-blur-sm">
          <div className="animate-scrolling-text whitespace-nowrap text-6xl font-bold text-white drop-shadow-lg">
            <span className="text-school-yellow">Gateway to Success</span> — Golden Gate Int. School — Technology-Driven Education — Building Tomorrow's IT Leaders
          </div>
        </div>
      </div>

      <div className="py-3 text-center text-xs text-white/70 border-t border-school-yellow/30">
        Made by <a
          href="https://linkedin.com/in/edhumbling"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-medium emma-glow"
        >
          Emma
        </a> from Artificial Intelligence Development Experimental Labs (AIDEL)
      </div>

      <style jsx>{`
        @keyframes scrollText {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes colorWave {
          0% {
            filter: hue-rotate(0deg) brightness(1);
            text-shadow: 0 0 10px rgba(255, 0, 255, 0.7),
                       0 0 20px rgba(255, 0, 255, 0.5),
                       0 0 30px rgba(255, 0, 255, 0.3);
          }
          33% {
            filter: hue-rotate(120deg) brightness(1.2);
            text-shadow: 0 0 15px rgba(0, 255, 255, 0.7),
                       0 0 25px rgba(0, 255, 255, 0.5),
                       0 0 35px rgba(0, 255, 255, 0.3);
          }
          66% {
            filter: hue-rotate(240deg) brightness(1.1);
            text-shadow: 0 0 12px rgba(255, 255, 0, 0.7),
                       0 0 22px rgba(255, 255, 0, 0.5),
                       0 0 32px rgba(255, 255, 0, 0.3);
          }
          100% {
            filter: hue-rotate(360deg) brightness(1);
            text-shadow: 0 0 10px rgba(255, 0, 255, 0.7),
                       0 0 20px rgba(255, 0, 255, 0.5),
                       0 0 30px rgba(255, 0, 255, 0.3);
          }
        }

        .animate-scrolling-text {
          animation: scrollText 20s linear infinite,
                     colorWave 8s linear infinite;
        }

        .glow-wave-effect {
          position: relative;
          color: #fff;
          animation: textGlow 3s ease-in-out infinite;
        }

        @keyframes textGlow {
          0%, 100% {
            color: #ff69b4;
            text-shadow: 0 0 10px #ff69b4,
                       0 0 20px #ff69b4,
                       0 0 30px #ff69b4;
          }
          50% {
            color: #00ffff;
            text-shadow: 0 0 15px #00ffff,
                       0 0 25px #00ffff,
                       0 0 35px #00ffff;
          }
        }

        .emma-glow {
          position: relative;
          animation: emmaGlow 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .emma-glow:hover {
          transform: scale(1.1);
        }

        @keyframes emmaGlow {
          0%, 100% {
            color: #FFD700;
            text-shadow: 0 0 5px #FFD700,
                       0 0 10px #FFD700,
                       0 0 15px #FFD700;
          }
          50% {
            color: #00bfff;
            text-shadow: 0 0 7px #00bfff,
                       0 0 14px #00bfff,
                       0 0 21px #00bfff;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
