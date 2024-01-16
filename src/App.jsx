import { useState } from 'react'
import Work from './components/Work'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidenav/>
    <Main/>
    <Work/>
    <Resume/>
    <Projects/>
    <Contact/>
    
    </>
  )
}

export default App
