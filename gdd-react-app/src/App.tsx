import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="form">
        {/* First Name */}
        <div className="input-div">
          <input
            className="input-field"
            type="text"
            name="First Name"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="input-div">
          <input
            className="input-field"
            type="text"
            name="Last Name"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>

        {/* User Role Dropdown */}
        <div className="input-div">
          <select className="input-field" name="User Role" id="userRole">
            <option value="" disabled selected hidden>
              Select your role
            </option>
            <option value="project manager">Project Manager</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
        </div>

        {/* Affiliation */}
        <div className="input-div">
          <input
            className="input-field"
            type="text"
            name="Affiliation"
            id="affiliation"
            placeholder="Enter your affiliation"
          />
        </div>

        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
