import './App.css';
import React, {useState} from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "", password: "", passwordValidation: "", emailSubscription: true
  });

  const handleChange = (event) => {
    const {name, type, checked, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  //console.log(formData)

  const handleSubmit = (event) => {
    if(formData.password !== formData.passwordValidation){
      alert("The passwords do not match");
      return;
    }

    event.preventDefault()
    console.log(formData)
  }

  return (
      <div className="form-container">
        <h1 className="loginHeader" >Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
              type="email"
              placeholder="Email address"
              className="form--input"
              name="email"
              onChange={handleChange}
              value={formData.email}
          />
          <input
              type="password"
              placeholder="Password"
              className="form--input"
              name="password"
              onChange={handleChange}
              value={formData.password}
          />
          <input
              type="password"
              placeholder="Confirm password"
              className="form--input"
              name="passwordValidation"
              onChange={handleChange}
              value={formData.passwordValidation}
          />

          <div className="form--marketing">
            <input
                id="okayToEmail"
                type="checkbox"
                name="emailSubscription"
                onChange={handleChange}
                checked={formData.emailSubscription}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button
              className="form--submit"
          >
            Sign up
          </button>
        </form>
      </div>
  );
}
