import { useState } from 'react';
import { DataProvider } from './context/DataContext';
import { BurgerContext } from './context/BurgerContext.jsx';
import { TitleContext } from './context/TitleContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './views/About.jsx';
import { Contact } from './views/Contact.jsx';
import { Events } from './views/Events.jsx';
import { Impressum } from './views/Impressum.jsx';
import { LandingPage } from './views/LandingPage.jsx';
import { Collaborate } from './views/Collaborate.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Projects } from './views/Projects.jsx';
import { NotFound } from './views/NotFound';
import { Faq } from './views/Faq.jsx';
import './scss/main.scss';

// delete after learning

function App() {
  const [title, setTitle] = useState('Lautsprecher');
  const [burgerState, setBurgerState] = useState('closed');

  return (
    <BrowserRouter>
      <div className="App">
        <BurgerContext.Provider value={{ burgerState, setBurgerState }}>
          <Header />
        </BurgerContext.Provider>
        <main>
          <DataProvider>
            <TitleContext.Provider value={{ title, setTitle }}>
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/collaborate" element={<Collaborate />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TitleContext.Provider>
          </DataProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
