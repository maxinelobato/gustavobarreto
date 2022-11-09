import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Services } from './components/Services';
import { Specialty } from './components/Specialtys';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Specialty />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default App;
