import './App.css'

import { Header, Footer, HeroSection, Technologies, Projects, Experience } from '../components/index'

function App() {

  return (
    <>
      <main className='main'>
          <Header />
          <HeroSection />
          <Technologies />
          <Projects />
          <Experience />
          <Footer />
      </main>
    </>
  )
}

export default App
