// React Router-dom imports
import { Form, NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

// Import css
import "../../assets/css/loginPage.css"

export default function LoginPage() {
  return (
    <div className='login-page'>
      <section className='auth-outlet'>
        <h1>welcome to <span>slliks note</span></h1>
        <Form method='post' className='auth-form'>
          <input 
            type="text" 
            name="username" 
            placeholder='Username or email' 
            aria-label='enter username'
            autoComplete='username'
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder='password'
            aria-label='enter password'
            required
          />
          <input type="submit" value="Login" className='auth-form-btn' disabled={false} />
        </Form>
        <span className='form-options'>
          Forgot your login detail?
          <NavLink to={'/password-reset'} className="app-link"> Reset Password </NavLink>
        </span>
        <span className='form-options'>
          OR
        </span>
        <span className='form-options'>
          <FcGoogle className='auth-icon' />
          <NavLink to={'https://myaccount.google.com/'} className="app-link"> Login with google </NavLink>
        </span>
      </section>
      <div className="login-footer">
        <span>
          Don't have an account?
          <NavLink to={'register'} className="app-link"> Register </NavLink>
        </span>
      </div>
    </div>
  )
}
