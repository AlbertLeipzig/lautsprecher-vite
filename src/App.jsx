import { DataProvider } from './context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './views/About.jsx';
import { Contact } from './views/Contact.jsx';
import { Events } from './views/Events.jsx';
import { Impressum } from './views/Impressum.jsx';
import { LandingPage } from './views/LandingPage.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Projects } from './views/Projects.jsx';
import './scss/main.scss';

// delete after learning

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <DataProvider>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </DataProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
