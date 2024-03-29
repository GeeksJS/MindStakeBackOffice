import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar.js';
import Header from './Pages/Header/Header.js';
import Customization from './Pages/Customization/Customization.js';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Login from './Pages/Login/Login.js';
import useToken from './UseToken.js';
import Admin from './Pages/Admin/Admin.js';
import Users from './Pages/Users/Users.js';
import Project from './Pages/Project/Project.js';
import Projects from './Pages/Project/Projects.js';
import ProjectList from './Pages/Project/ProjectList.js';
import Complaints from './Pages/Complaint/Complaints.js';
import Packs from './Pages/Pack/Packs.js';
import Profile from './Pages/Profile/Profile.js';
import Transaction from './Pages/Transaction/Transactions';
import Transactions from './Pages/Transaction/Transactions';
import Donations from './Pages/Donation/Donations';
import Companies from './Pages/Companies/Companies';

function App() {
  var isFluid = JSON.parse(localStorage.getItem('isFluid'));

  const { token, setToken } = useToken();

  return (
    <div >
      <div className={isFluid ? "container-fluid" : "container"} data-layout="container">
        <BrowserRouter>

          {(window.location.pathname !== "/login") && <Navbar />}
          <div className='content'>
          {(window.location.pathname !== "/login") && <Header />}

            <Routes>
              <Route path='/login' element={<Login setToken={setToken}/>}></Route>

              <Route exact path='/dashboard' element={<Dashboard />}></Route>
              <Route exact path='/admin' element={<Admin />}></Route>
              <Route exact path='/users' element={<Users />}></Route>
              <Route exact path='/users/:id' element={<Users />}></Route>
              <Route exact path='/projects' element={<Projects />}></Route>
              <Route exact path='/projectslist' element={<ProjectList />}></Route>
              <Route exact path='/complaints' element={<Complaints />}></Route>
              <Route exact path='/packs' element={<Packs />}></Route>
              <Route exact path='/profile' element={<Profile />}></Route>
              <Route exact path='/transactions' element={<Transactions />}></Route>
              <Route exact path='/donations' element={<Donations />}></Route>
              <Route exact path='/companies' element={<Companies />}></Route>












              <Route path='*' element={<NotFound />} ></Route>
            </Routes>
          </div>

          <Customization />

        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
