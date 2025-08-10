'use client';

import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Technologies from '@/components/Technologies/Technologies'
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Кирилл",
    "jobTitle": "Frontend Developer",
    "description": "Опытный Frontend разработчик, специализирующийся на React, Next.js и TypeScript",
    "url": "https://kkirrin.ru/",
    "image": "https://kkirrin.ru/avatar.png",
    "sameAs": [
      "https://github.com/kkirrin",
      "https://linkedin.com/in/your-linkedin",
      "https://t.me/your-telegram"
    ],
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "CSS",
      "HTML",
      "Web Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "description": "Разработка пользовательских интерфейсов и веб-приложений"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='main'>
        <Header />
        <HeroSection />
        <Technologies />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
