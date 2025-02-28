import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TextField, List, ListItem, ListItemButton, Box } from "@mui/material";
import { connect } from "react-redux";

const InputFilter = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const allSuggestions = ["orange", "cat", "dog","eagle"];

  const handleChange = (event) => {
    console.log("clicking");

    const value = event.target.value;
    setInputValue(value);
    setSubmitted(false);
    const filtered = allSuggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setSelectedIndex(null);
  };

  const handleClick = () => {
    if (inputValue.length === 0) {
      setSuggestions(allSuggestions);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (!submitted) {
        const selectedWord =
          suggestions[selectedIndex === null ? 0 : selectedIndex];
        setInputValue(selectedWord);
        setSubmitted(true);
        setSuggestions([]);
      }
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (suggestions.length === 0) return;

      setSelectedIndex((prevIndex) => {
        if (prevIndex === null || prevIndex === suggestions.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setSubmitted(true); // Mark word as selected
  };
  return (
    <Box sx={{ padding: "0px", position: "relative" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Type something"
          variant="outlined"
          fullWidth
          value={inputValue}
          onClick={handleClick}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
      </form>
      {suggestions.length > 0 && !submitted && (
        <>
          <Box
            onClick={() => {
              setSuggestions([]);
            }}
            sx={{
              position: "fixed",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              zIndex: 9998,
              backgroundColor: "transparent",
            }}
          ></Box>
          <List
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              border: "1px solid #ccc",
              width: "100%",
              marginTop: "10px",
              zIndex: 9999,
              backgroundColor: "white",
            }}
          >
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
        </>
      )}
    </Box>
  );
};

export default InputFilter;
