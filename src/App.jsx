import './App.css'
import { Route, Routes } from 'react-router-dom'
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
import NumberConfirm from './pages/NumberConfirm';
import ResetPassword from './pages/ResetPassword';
import AddNewProject from './pages/AddNewProject';
import CasePortfolio from './pages/CasePortfolio';
import Announcement from './pages/Announcement';
import CommercialAnnouncement from './pages/CommercialAnnouncement';
import TaskSection from './pages/TaskSection';
import Favorites from './pages/Favorites';
import Draft from './pages/Draft';
import CommercialAdvertisement from './pages/CommercialAdvertisement';
import MyAnnouncements from './pages/MyAnnouncements';
import AllResponses from './pages/AllResponses';
import Chat from './pages/Chat';
import CreateFreelancerProfile from './pages/CreateFreelancerProfile';
import CreateCustomerProfile from './pages/CreateCustomerProfile';
import Lending from './pages/Lending';
import CustomerProfile from './pages/CustomerProfile';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Lending />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/email-confirm' element={<EmailConfirm />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/setting-account' element={<SettingsAccount/>}/>
        <Route path='/list-freelancer' element={<ListFreelancer/>} />
        <Route path='/create-task-without-ai' element={<CreateTask />}/>
        <Route path='/freelancer-profile' element={<FreelancerProfile />}/>
        <Route path='/response' element={<Response />}/>
        <Route path='/list-orders' element={<ListOrders/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/number-confirm' element={<NumberConfirm />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/add-new-project' element={<AddNewProject />}/>
        <Route path='/case-portfolio' element={<CasePortfolio/>}/>
        <Route path='/announcement' element={<Announcement />}/>
        <Route path='/commercial-announcement' element={<CommercialAnnouncement />}/>
        <Route path='/task-section' element={<TaskSection/>}/>
        <Route path='/create-freelancer-profile' element={<CreateFreelancerProfile />}/>
        <Route path='/create-customer-profile' element={<CreateCustomerProfile />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/draft' element={<Draft/>}/>
        <Route path='/commercial-advertisement' element={<CommercialAdvertisement/>}/>
        <Route path='/my-announcements' element={<MyAnnouncements />}/>
        <Route path='/responses' element={<AllResponses />}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/customer-profile' element={<CustomerProfile />}/>
    </Routes>
  )
}

export default App

