import { useEffect, useState } from 'react'

import './css/App.css'
import Display from './Components/Display';

function App() {
 

  return (
    
    <div className="App">
      <Display /> 
      <nav className="footer_nav">
       
                <ul>
                    <li> <a>Matrix Display Digital Clock © 2023 By Shirak Soghomonian </a></li>
                    <li><a target="_blank" href="https://github.com/Shirak22/matrix_display_clock">Github</a></li>
                    <li><a target="_blank" href="https://codepen.io/shirakserop">CodePen</a></li>
                </ul>
            </nav>
    </div>
  )
}

export default App
