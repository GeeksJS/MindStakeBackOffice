import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Header from './Pages/Header/Header';
import Customization from './Pages/Customization/Customization';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import useToken from './UseToken';
import Admin from './Pages/Admin/Admin';
import Users from './Pages/Users/Users';
import Project from './Pages/Project/Project';
import Projects from './Pages/Project/Projects';
import ProjectList from './Pages/Project/ProjectList';
import Complaints from './Pages/Complaint/Complaints';
import Packs from './Pages/Pack/Packs';
import Profile from './Pages/Profile/Profile';

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
