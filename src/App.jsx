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
import FreelancerProfile from './pages/FreelancerProfile';
import Response from './pages/Response';
import CreateTask from './pages/CreateTask';
import ListOrders from './pages/ListOrders';
import Post from './pages/Post';

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
        <Route path='/create-task-without-ai' element={<CreateTask />}/>
        <Route path='/profile' element={<FreelancerProfile />}/>
        <Route path='/response' element={<Response />}/>
        <Route path='/list-orders' element={<ListOrders/>}/>
        <Route path='/post' element={<Post/>}/>
    </Routes>
  )
}

export default App

