import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import {Link,useNavigate} from 'react-router-dom'
import LoginImg from '../components/login.svg'
export const Login = () => {
  const[credentials,setcredentials]=useState({
    email:'',
    password:'',
  })
  let navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:credentials.email,
        password:credentials.password,
      })
    })
    const json = await response.json()
    if(!json.success){
      alert("Enter valid credentials")
    }
    else{
      localStorage.setItem('userEmail',credentials.email);
      localStorage.setItem("authToken",json.authToken)
      navigate("/")
    }

  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (   
<>
<Navbar/>
<div className='cotainer w-100 d-flex'>
<div className='container w-100 d-flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit}>
  <h3 className='mb-3'>Login</h3>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/createuser' className='m-3 btn btn-danger'>Don't have a account?</Link>
</form>
        
        </div>
<div className='container w-50 d-none d-md-block'>
  <img src={LoginImg} alt='login' style={{width:'100%', height:'100%'}}/>
</div>
</div>
</>
  )
}
