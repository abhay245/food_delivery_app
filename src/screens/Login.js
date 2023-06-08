import React from 'react'
import Navbar from '../components/Navbar'
import './Screens.css'
import {Link} from 'react-router-dom'
export const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='login-screen'>
          <div className='form'>
          <div className='login-screen-title'>Good to see you again</div>

            <div className='form-element'>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email'/>
            </div>

              <div className='form-element'>
              <label htmlFor='email'>Your password</label>
              <input type='password' id='password'/>
              </div>

              <div className='form-element'>
              <button type='submit'>Login In</button>
              </div>
          <div className='login-link'>
            <Link to='/SignIn'>Don't have an account?</Link>
          </div>
          </div>
        </div>
    </div>
  )
}
