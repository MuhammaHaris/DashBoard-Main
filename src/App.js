import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Tables from './Pages/Tables';
import ProfilePage from './Pages/ProfilePage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import { useLocation } from 'react-router-dom';
function App() {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <div className='font-Poppins'>
        <div className=' p-3 bg-[#F5F7F8] flex'>
          <div className='w-[35%] top-3'>
            <Sidebar />
          </div>
          <div className=''>
            {console.log(pathname)}
            {pathname !== '/sign-up' && pathname !== '/sign-in' && <Navbar />}

            <Router>
              <Route path='/' element={<Home />} />
              <Route path='/Profile' element={<ProfilePage />} />
              <Route path='/Notification' element={<Notification />} />
              <Route path='/Tables' element={<Tables />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sign-in' element={<SignIn />} />
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
