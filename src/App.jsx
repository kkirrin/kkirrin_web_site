import './App.css'

import { Header, Footer, HeroSection, Technologies } from '../components/index'

function App() {

  return (
    <>
      <main className='main'>
          <Header />
          <HeroSection />
          <Technologies />
          <Footer />
      </main>
    </>
  )
}

export default App
