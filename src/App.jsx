import Header from './components/Header'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect, useState } from 'react'

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
    <div className="mx-auto min-h-screen text-white font-sans relative">
      <Header />
      <Technologies />
      <Projects />
      <Contact />
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50"
          aria-label="Volver al inicio"
        >
          ↑ Inicio
        </button>
      )}
    </div>
  )
}

export default App
