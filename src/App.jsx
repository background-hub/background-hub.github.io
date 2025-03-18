import { useTranslation } from 'react-i18next';
import './App.css'
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from "./components/Navbar";
import Servicos from './components/services';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Se for a primeira vez acessando, define o idioma do navegador
    if (!localStorage.getItem("i18nextLng")) {
      const userLang = navigator.language.split("-")[0]; // Pega apenas "pt" de "pt-BR"
      i18n.changeLanguage(userLang);
    }
  }, [i18n]);
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Home />
        <About /> 
        <Servicos />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;