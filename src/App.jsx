import { useEffect, useState } from 'react'
import Menu from './components/ui/Menu/Menu'
import Header from './sections/About/Header'
import Experience from './sections/Experience/Experience'
import Technologies from './sections/Technologies/Technologies'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <div className="mx-auto min-h-screen text-white font-sans relative scroll-smooth">
      
      <Menu />
      <Header />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-amber-200/95 
            text-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-blue-200 
            transition-all z-50 text-sm sm:text-base"
          aria-label="Volver al inicio"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
