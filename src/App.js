import './App.css';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './screens/Login';
import {SignIn} from './screens/SignIn'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <CartProvider>  
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='createuser' element={<SignIn/>}/>
          <Route path='/myOrder' element={<MyOrder/>}/>
        </Routes>
      </Router>
    </div>
    </CartProvider>
  );
}



export default App;
