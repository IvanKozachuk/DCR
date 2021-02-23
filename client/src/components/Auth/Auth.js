import React, { useState } from 'react';
import './auth.css';
import Input from './Input';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import authReducer from '../../reducers/auth';

import { signin, signup } from '../../actions/auth';


const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  admin: false
}

const Auth = ({ logData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [warning, setWarning] = useState('');

  // warning to be showed, if some of the field is empty
  const showWarning = () => {
    setWarning('Please fill out both fields!');
    setTimeout(() => setWarning(''), 1500);
  }

  const invalidCred = (res) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.email ==='' || formData.password ==='') {
      showWarning();
    } else {
      if(isSignup) {
        dispatch(signup(formData, history));
      } else {
        dispatch(signin(formData, history));
      }
  
      logData();
      JWTSuccess();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const switchMode = (e) => {
    e.preventDefault();
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  }

  const JWTSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='auth_container'>
        <h3>{isSignup ? 'Sign up' : 'Sing in'}</h3>
        <form className="auth_form" onSubmit={handleSubmit}>
          {
            isSignup && (
              <>
                <label>First Name</label>
                <Input name="firstName" handleChange={handleChange}/>
                <label>Last Name</label>
                <Input name="lastName" handleChange={handleChange}/>
              </>
            )
          }

          <label>Email</label>
          <Input name="email" handleChange={handleChange} type="text"/>
          <label>Password</label>
          <Input name="password" handleChange={handleChange} type="password"/>
          
          { isSignup && 
          <>
            <label>Repeat password</label> 
            <Input name="confirmPassword" handleChange={handleChange} type="password"/>
          </>
          }

          <h5 className="fail_msg">{warning}</h5>
          
          <button className='nav_btn'>
            {isSignup ? 'Sing up' : 'Sign in'}
          </button>

          <div className="switch_mode_container">
            <button className="nav_btn sign_up" onClick={switchMode}>
              { isSignup ? "Already have an account? Sign in" : "Create an account" }
            </button>
          </div>
        </form>
    </div>
  )
}

export default Auth
