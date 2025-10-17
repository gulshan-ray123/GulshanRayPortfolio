import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
function App() {
 const [isDark, setIsDark] = useState(true);
  const [isYellow, setIsYellow] = useState(false);

  const toggleGradient = () => setIsDark(prev => !prev);
  const toggleYellow = () => setIsYellow(prev => !prev);

  return (
    <div className="App">
      <Navbar toggleGradient={toggleGradient} toggleYellow={toggleYellow} />
      <Home isDark={isDark} isYellow={isYellow} />
    </div>
  )
}

export default App;
