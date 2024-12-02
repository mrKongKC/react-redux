import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TextField, List, ListItem, ListItemButton } from "@mui/material";
import { connect } from 'react-redux';

const Todo = ({ data}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the selected index
  const [submitted, setSubmitted] = useState(false); // Track if word is already selected

  const allSuggestions = data

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSubmitted(false); // Reset submission state on input change

    // Update autocomplete suggestions (matches if input is anywhere in the word)
    const filtered = allSuggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setSelectedIndex(null); // Reset selected index on new input
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (!submitted) {
        // If word is not submitted, select the current suggestion
        const selectedWord =
          suggestions[selectedIndex === null ? 0 : selectedIndex];
        setInputValue(selectedWord); // Set input to selected suggestion
        setSubmitted(true); // Mark word as selected
        setSuggestions([]); // Clear suggestions
      } else {
        // Submit the word when Enter is pressed again
        console.log("Form Submitted:", inputValue);
        // Perform submission action here
        setInputValue(""); // Clear the input field
        setSuggestions([]); // Clear the suggestions
        setSubmitted(false); // Reset the submission state
      }
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (suggestions.length === 0) return;

      // Move to the next suggestion or loop back to the first one
      setSelectedIndex((prevIndex) => {
        if (prevIndex === null || prevIndex === suggestions.length - 1) {
          return 0; // Loop to the first suggestion
        }
        return prevIndex + 1; // Move to the next suggestion
      });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setSubmitted(true); // Mark word as selected
  };
  return (
    <div>
      <h1>Another Page</h1>
      <Typography variant="h4" gutterBottom>
        Welcome to MUI!
      </Typography>
      <Typography variant="body2">Features</Typography>
      {/* <ul>
        <li>User can type the word input textfield</li>
        <li>User can edit word in List</li>
        <li>User can delete word in List</li>
        <li>System must have 2 tables duplicate List and normal List</li>
        <li>System must push the new word into List</li>
        <li>System must display List like a table</li>
        <li>System must highlight word that duplicate in duplicate List</li>
        <li>System must clearable data in normal List</li>
        <li>Modal for confirmation for every cases</li>
        <li>
          System must prevent duplicate word by disable button to not push or
          unable to click enter
        </li>
        <li>
          System must have auto complete suggestion word like selection and user
          can click "Tab" for automatic input
        </li>
        <li>....</li>
      </ul> */}
      <div style={{ padding: "20px" }}>
        <Typography variant="h6">Autocomplete with Enter and Tab</Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="Type something"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoComplete="off" // Disable browser's default autocomplete
          />
        </form>
        {suggestions.length > 0 && !submitted && (
          <List style={{ border: "1px solid #ccc", marginTop: "10px" }}>
            {suggestions.map((suggestion, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleSuggestionClick(suggestion)}
                  sx={{
                    backgroundColor:
                      selectedIndex === index ? "#e0e0e0" : "transparent", // Highlight selected item
                    "&:hover": {
                      backgroundColor: "#f5f5f5", // Hover color
                    },
                  }}
                >
                  {suggestion}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data, 
});

export default connect(mapStateToProps)(Todo);
