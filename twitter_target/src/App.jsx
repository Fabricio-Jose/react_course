//import React from 'react'
import './App.css'
//import './index.css'
import { TarjetaTW } from './TarjetaTW.jsx'

export function App (){
  return (
    <section className="App">
      <TarjetaTW 
        initialisFollowing
        userName="cristi" 
        name="Cristano Ronalo Oficial" 
        imgPerfil="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPYqxh5NWsjRBmr0xw7vDEJXNL34Lt4cr2Q"/>
      <TarjetaTW 
        initialisFollowing={false}
        userName="liome" 
        name="Lionel Messi" 
        imgPerfil="https://www.fundssociety.com/wp-content/uploads/2023/06/Captura-de-pantalla-2023-06-21-a-las-11.12.44.png"/>
      <TarjetaTW 
        initialisFollowing
        userName="fabicho" 
        name="Fabricio Barrionuevo" 
        imgPerfil="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/322950261_904663014072018_7888531727916194304_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeG0_LtzMft3z-kGmFi13hN_oxXLoi5rmy2jFcuiLmubLfO4rVXsUm1qDYDuUX7CbgBg6nfYfCNHGEyGOagUzxFT&_nc_ohc=GGjfIlmCnnkAX-NL_kw&_nc_ht=scontent.faqp1-1.fna&oh=00_AfDO8u160Sonu77xcEN-G7ZlsYzyJGsBBjsgltvwN8n_yg&oe=6504307B"/>
    </section>
  )
}


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/