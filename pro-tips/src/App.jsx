import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Form from './components/Form'

function App() {

  return (
    <>
      <nav>
        <h1><Link to={"/home"}>Kalvium &#10084;&#65039;</Link></h1>
        <div id='container'>
          <h3><Link to={"/contacts"}>Contacts</Link></h3>
          <h3><Link to={"/form"}>Registration Form</Link></h3>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </>
  )
}

export default App