import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AnotherPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Navigate to AnotherPage
  };
  return (
    <div>
      <h1>Another Page</h1>
      {/* <div style={{ textAlign: "center", marginTop: "50px" }}> */}
        <Typography variant="h4" gutterBottom>
          Welcome to MUI!
        </Typography>
        <Typography variant="body2">Features</Typography>
        <ul>
          <li>User can type the word input textfield</li>
          <li>User can edit word in List</li>
          <li>User can delete word in List</li>
          <li>System must have 2 tables duplicate List and normal List</li>
          <li>System must push the new word into List</li>
          <li>System must display List like a table</li>
          <li>System must highlight word that duplicate in duplicate List</li>
          <li>System must clearable data in normal List</li>
          <li>Modal for confirmation for every cases</li>
          <li>System must prevent duplicate word by disable button to not push or unable to click enter</li>
          <li>System must have auto complete suggestion word like selection and user can click "Tab" for automatic input</li>
          <li>....</li>
        </ul>
        <Button variant="contained" color="primary" onClick={goToHome}>
          Click Me
        </Button>
      {/* </div> */}
    </div>
  );
};

export default AnotherPage;
