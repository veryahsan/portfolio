import { useEffect } from 'react'
import { useStore } from './store/useStore'
import Navbar from './components/layout/Navbar'
import HomeIntro from './components/sections/HomeIntro'
import Technologies from './components/sections/Technologies'
import Projects from './components/sections/Projects'
import ContactSection from './components/sections/ContactSection'
import './styles/main.scss'
import './App.css'

function App() {
  const { isDarkMode } = useStore()

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme'
  }, [isDarkMode])

  return (
    <>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <HomeIntro />
          <Technologies />
          <Projects />
        </main>
      </div>
      <ContactSection />
    </>
  )
}

export default App
