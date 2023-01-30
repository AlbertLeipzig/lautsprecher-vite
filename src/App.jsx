import { DataProvider } from './context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Events } from './views/Events';
import { Impressum } from './views/Impressum';
import { LandingPage } from './views/LandingPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './views/Login';
import { Admin } from './views/Admin';
import './scss/main.scss';

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
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </DataProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
