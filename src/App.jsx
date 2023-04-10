import { useEffect, useState } from 'react'

import './css/App.css'
import Display from './Components/Display';

function App() {
 

  return (
    
    <div className="App">
      <Display /> 
      <nav className="footer_nav">
       
                <ul>
                    <li> <a>By Shirak Soghomonian © 2023</a></li>
                    <li><a target="_blank" href="https://github.com/Shirak22/matrix_display_clock">Github</a></li>
                    <li><a target="_blank" href="https://codepen.io/shirakserop">CodePen</a></li>
                </ul>
            </nav>
    </div>
  )
}

export default App
