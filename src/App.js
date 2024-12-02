import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataList from "./components/pages/DataList";
import AnotherPage from "./components/pages/AnotherPage";
import Todo from "./components/pages/Todo";
import Layout from "./components/layout/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { connect } from "react-redux";
import { setData } from "./redux/actions/dataActions";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff914d", // Your desired primary color (blue here)
    },
    secondary: {
      main: "#ffde59", // Optional: Secondary color
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent global styles */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DataList />} />
            <Route path="/another" element={<AnotherPage />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
