import {React} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from './Modal';
import Cart from '../screens/cart';
import {useCart} from './ContextReducer'
export default function Navbar() {
  const navigate = useNavigate();
  let data=useCart();
  const handleLogout=()=>{
localStorage.removeItem("authToken");
navigate("/login");
  }
    return (   
      <div >
        <nav className="navbar bg-body-tertiary" >
  <div className="container-fluid"  >
    <Link to='/' className="navbar-brand" href="#">Food Express</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Food Express</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 me-auto mb-2">
          <li className="nav-item">
            <Link to='/' className="nav-link active fs-5" aria-current="page">Home</Link>
          </li>
          {(localStorage.getItem("authToken"))?
          <li className='nav-item'>
            <Link className='nav-lin active fs-5 text-decoration-none text-reset' aria-current="page" to="/myOrder">My Orders
            </Link>
          </li>  
        :""}
        </ul>
        {(!localStorage.getItem("authToken"))?
        <div className='flex-column'>
            <Link to='/createuser' className="nav-link active fs-5 mt-3">Sign In</Link>
            <Link to='/login' className="nav-link active fs-5 mt-3">Login</Link>       
        </div>
        :
        <div>
        <div className='nav-link active fs-5 mt-3'  data-bs-toggle="modal" data-bs-target="#exampleModal">
          My Cart {" "}
          <Badge pill bg='danger'>{data.length}</Badge>
        </div>
        <Modal><Cart /></Modal>
        <div className='nav-link active fs-5 mt-3' onClick={handleLogout}>
          Logout
        </div>
        </div>
        }
      </div>
    </div>
  </div>
</nav>
      </div>
    )
}          
