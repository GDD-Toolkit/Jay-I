import styles from "./index.module.css";
import React, { useState } from "react";
import {theme} from './mui.ts';
import { ThemeProvider } from "@mui/material";
import InstructionsBox from './components/Instructions/InstructionsBox.tsx';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const handleChanges = (event: any) => {
    /* Prevent the form from being refreshed to empty */
    event.preventDefault();
    
    console.log(firstName);
    console.log(lastName);
    console.log(role);
    console.log(affiliation);
  };

  return (
    <ThemeProvider theme={theme}>
    
        <InstructionsBox></InstructionsBox>
        {/* <NavBar title="This is where the NavBar should go" /> */}
        <div className={styles.App}>
        <form className={styles.form}>
          {/* First Name */}
          <div className={styles.inputDiv}>
            <input
              onChange={e => setFirstName(e.target.value)}
              className={styles.inputField}
              type="text"
              name="First Name"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
         <div className={styles.inputDiv}>
            <input
              onChange={e => setLastName(e.target.value)}
              className={styles.inputField}
              type="text"
              name="Last Name"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>

          {/* User Role Dropdown */}
          <div className={styles.inputDiv}>
          <select
              className={styles.inputField}
              name="User Role"
              id="userRole"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled hidden>
                Select your role
              </option>
              <option value="project manager">Project Manager</option>
              <option value="student">Student</option>
              <option value="professor">Professor</option>
            </select>
          </div>

          {/* Affiliation */}
          <div className={styles.inputDiv}>
            <input
              onChange={e => setAffiliation(e.target.value)}
              className={styles.inputField}
              type="text"
              name="Affiliation"
              id="affiliation"
              placeholder="Enter your affiliation"
            />
         </div>

          {/* Submit Button */}
          <button className={styles.submitBtn} type="submit" onClick={handleChanges}>
            Submit
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
