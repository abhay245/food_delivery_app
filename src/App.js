import './App.css';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './screens/Login';
import {SignIn} from './screens/SignIn'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='SignIn' element={<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
