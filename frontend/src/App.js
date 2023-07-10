import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import Admin from './Components/Admin';
import Add_student from './Components/Admin/Add_student';
import Allclasses from './Components/Admin/Allclasses';
import Classdata from './Components/Admin/Classdata';
import Onlyone from './Components/Admin/Onlyone';
import Addpayment from './Components/Admin/Addpayment';

 
function App() {




  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<AdminLogin />}  />
        <Route path='/admin' element = {<Admin />} />
        <Route path='/addstudent' element = {<Add_student />} />
        <Route path='/classes' element = {<Allclasses /> } />
        <Route path='/class/:i' element = {<Classdata />}  />
        <Route path='/class/:i/:id' element = {<Onlyone />}  />
        <Route path='/acceptpayment' element = {<Addpayment />}  />
      </Routes>
    </Router>
  );
}

export default App;