import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Services } from './components/Services';
import { Specialty } from './components/Specialtys';
import { Navbar } from './components/Navbar';
import { DarkMode, GlobalStyle } from '@chakra-ui/react';

function App() {
  return (
    <>
      <DarkMode>
        <GlobalStyle />
        <Navbar />
        <Header />
        <Specialty />
        <Services />
        <About />
        <Footer />
      </DarkMode>
    </>
  );
}

export default App;
