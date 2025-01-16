import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Registration from './pages/Registration';
import EmailConfirm from './pages/EmailConfirm';
import Login from './pages/Login'
import Catalog from './pages/Catalog';
import MyOrders from './pages/MyOrders';
import SettingsAccount from './pages/SettingsAccount';
import CreateTaskPageOne from './pages/CreateTask/Page-1';
import CreateTaskPageTwo from './pages/CreateTask/Page-2';
import CreateTaskPageThree from './pages/CreateTask/Page-3';
import CreateTaskPageFour from './pages/CreateTask/Page-4';
import CreateTaskPageFive from './pages/CreateTask/Page-5';
import CreateTaskPageSix from './pages/CreateTask/Page-6';
import CreateTaskPageSeven from './pages/CreateTask/Page-7';
import CreateTaskPageEight from './pages/CreateTask/Page-8';
import FreelancerProfile from './pages/FreelancerProfile';

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
        <Route path='/create-task' element={<CreateTaskPageOne />}/>
        <Route path='/create-task-1' element={<CreateTaskPageTwo />}/>
        <Route path='/create-task-2' element={<CreateTaskPageThree />}/>
        <Route path='/create-task-3' element={<CreateTaskPageFour />}/>
        <Route path='/create-task-4' element={<CreateTaskPageFive />}/>
        <Route path='/create-task-5' element={<CreateTaskPageSix />}/>
        <Route path='/create-task-6' element={<CreateTaskPageSeven />}/>
        <Route path='/create-task-7' element={<CreateTaskPageEight />}/>
        <Route path='/profile' element={<FreelancerProfile />}/>
    </Routes>
  )
}

export default App

