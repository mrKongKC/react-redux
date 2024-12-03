import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/power.png";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "Todo", path: "/todo" },
];

function Layout(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const goToPage = (path) => {
    navigate(path);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{
              justifyContent: { xs: "space-between" },
              width: { xs: "100%", sm: "unset" },
            }}
          >
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="logo" width={"100px"} />
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                backgroundColor: "black",
              }}
            ></Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: "12px",
                ml: 1,
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  color="primary"
                  key={index}
                  variant="outlined"
                  sx={{ fontWeight: 700 }}
                  onClick={() => {
                    goToPage(item.path);
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          p: 3,
          backgroundColor: "#f8f9fa",
          width: "100%",
          height: "100dvh",
          overflow: "scroll",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
