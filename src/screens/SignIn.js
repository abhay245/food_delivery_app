import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import signImg from '../components/sign.svg'
export function SignIn(){
  const[credentials,setcredentials]=useState({
    name:'',
    email:'',
    password:'',
    location:''
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:credentials.name,
        email:credentials.email,
        password:credentials.password,
        location:credentials.location
      })
    })
    const json = await response.json()
    console.log(json);
    if(!json.success){
      alert("Enter valid Credentials")
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
        <Navbar />
        <div className='cotainer w-100 d-flex'>
        <div className='container w-100 d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Sign In</h3>
        <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Location</label>
    <input type="text" className="form-control" id="location" name='location' value={credentials.location} onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a User?</Link>
</form>
        </div>
        <div className='container w-100 d-none d-md-block'>
        <img src={signImg} alt='sign in' style={{width:'100%', height:'100%'}}/>
        </div>
        </div>
    </>
  )
}
