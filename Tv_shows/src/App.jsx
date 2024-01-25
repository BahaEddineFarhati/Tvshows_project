import { useState } from 'react'
import './App.css'
import Comp from './comp.jsx'

function App() {

  const data = {title : "Game of Thrones", img : "https://ew.com/thmb/-QusAb63Hk_aQyoPuBhlZSuzqnY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/game-of-thrones-1-2000-fa124cd9a86049919b97184120240c4a.jpg", prog : 8}
  const data2 = {title : "Dexter", img : "https://i.ebayimg.com/images/g/jUIAAMXQxj1R6AVP/s-l1600.jpg" ,  prog : 1}

  return (
    <div className="App">
      <header>
      <h1>LOGO</h1>
      <button>new serie</button>
      </header>
      <hr />
      <div className='series'>
      <Comp props={data} />
      <Comp props={data2} />
      </div>

    </div>
  )
}

export default App
