import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Registration from './pages/Registration';
import EmailConfirm from './pages/EmailConfirm';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/email-confirm' element={<EmailConfirm />}/>
    </Routes>
  )
}

export default App

