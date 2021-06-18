import React, {useState} from 'react';
import Logo from '../../../src/logo.jpg'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

import './Signup.css';


export default function Signup() {
  const [value, setValue] = useState()
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form>
          <label htmlFor="fname">First Name</label>
          <br />
          <input
            className="input"
            type="text"
            
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br/>
          <label htmlFor="fname">Last Name</label>
          <br />
          <input
            className="input"
            type="text"
           
         
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br/>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <PhoneInput
           defaultCountry="IND"
           value={value}
           onChange={setValue} />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}

