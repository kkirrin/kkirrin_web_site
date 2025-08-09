import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Technologies from '@/components/Technologies/Technologies'
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <HeroSection />
      <Technologies />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
