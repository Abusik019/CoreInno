import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Registration from './pages/Registration';
import EmailConfirm from './pages/EmailConfirm';
import Login from './pages/Login'
import Catalog from './pages/Catalog';
import MyOrders from './pages/MyOrders';
import SettingsAccount from './pages/SettingsAccount';
import ListFreelancer from './pages/ListFreelancer';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/email-confirm' element={<EmailConfirm />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/setting-account' element={<SettingsAccount/>}/>
        <Route path='/list-freelancer' element={<ListFreelancer/>} />
    </Routes>
  )
}

export default App

