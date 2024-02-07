import { Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if(isSignUp && formData?.password===formData?.confirmPassword){
    if(formData?.email!=="admin@123"){
      setIsError(false)
      navigate('/HomePage', { state:  {userEmail:formData?.email}  })
    }
    else{
      setIsError(true)
    }
    // Perform authentication logic here (e.g., send data to a server)

    // For this example, just log the form data

    // Clear the form after submission
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        {isSignUp && (
          <div>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
            <br />
          </div>
        )}
        {isError && (<p style={{color:"red"}}>Email or password not matching</p>)}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? <p> Already have an account? <Button>Login</Button></p> : <p> Don't have an account?  <Button>Sign Up</Button></p>}
      </p>
    </div>
  );
};

export default UserLogin;
