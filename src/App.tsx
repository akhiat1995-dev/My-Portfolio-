import Header from './components/Header';
import Hero from './components/Hero';
import LinkedInFreelancing from './components/LinkedInFreelancing';
import AISystems from './components/AISystems';
import About from './components/About';
import TimelineSection from './components/TimelineSection';
import SkillsGrid from './components/SkillsGrid';
import Certification from './components/Certification';
import Contact from './components/Contact';
import { GridPattern } from '@/components/ui/grid-pattern';
import { ReactLenis } from 'lenis/react';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ReactLenis root>
        <div className="relative min-h-screen bg-white overflow-x-hidden">
          {/* Global Background Grid Pattern */}
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [10, 15],
              [15, 10],
              [10, 15],
              [15, 10],
              [20, 20],
              [25, 5],
              [30, 12],
              [18, 25],
            ]}
            className="opacity-[0.5]"
          />

          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <LinkedInFreelancing />
              <AISystems />
              <About />
              <TimelineSection />
              <SkillsGrid />
              <Certification />
              <Contact />
            </main>
          </div>
        </div>
      </ReactLenis>
    </LanguageProvider>
  );
}

export default App;
