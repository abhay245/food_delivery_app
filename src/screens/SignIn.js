import React from 'react'
import './Screens.css'
import Navbar from '../components/Navbar'
export const SignIn = () => {
  return (
    <div>
        <Navbar />
        <div className='login-screen'>

          <div className='form'>
          <div className='login-screen-title'>Join our Family</div>
             <div className='form-element'>
              <label htmlFor='name'>Enter your Name</label>
              <input type='name' id='name'/>
             </div>

              <div className='form-element'>
              <label htmlFor='email'>Enter your email address</label>
              <input type='email' id='email'/>
              </div>

              <div className='form-element'>
              <label htmlFor='text'>Enter your delivery address</label>
              <input type='text' id='text'/>
              </div>

              <div className='form-element'>
              <label htmlFor='password'>Enter your Password</label>
              <input type='password' id='password'/>
              </div>

              <div className='form-element'>
              <button type='submit'>Sign In</button>
              </div>
          </div>
        </div>
    </div>
  )
}
