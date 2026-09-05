import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { TradingLab } from '@/components/sections/TradingLab';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <>
      <Navigation />
      <main id="main" className="relative min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <TradingLab />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;