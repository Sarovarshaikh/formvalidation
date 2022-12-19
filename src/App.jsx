import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './Banner'
// import './App.css'
import Form from './Form'
import Navbar from './Navbar'
import Pink from './assets/Pink'
import Rubycard from './Rubycard'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Pink/>
      <Rubycard/>
      <Form/>
      <Footer/>
   
    </div>
  )
}

export default App
