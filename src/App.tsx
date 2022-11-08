import { Navbar } from './components/Navbar';
import { Header } from './components/sections/Header';
import { Footer } from './components/sections/Footer';
import { About } from './components/sections/About';
import { AccordionProcess } from './components/sections/AccordionProcess';
import { Specialty } from './components/sections/Specialtys';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Specialty />
      <AccordionProcess />
      <About />
      <Footer />
    </>
  );
}

export default App;
