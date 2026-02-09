import React, { useState } from "react";
import "./AppBar.css";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone"; // Import PhoneIcon
import logo from "../../assets/logo HVAC.jpg";

const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "About Us", href: "#about-us" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <Box className="appbar" sx={{ backgroundColor: "#8bbfd9" }}>
      <Box className="appbar-logo" sx={{ borderRadius: "50px" }}>
        <img className="logo" src={logo} alt="logo" height={70} width={70} />
      </Box>
      {!isMobile && (
        <Box className="appbar-nav">
          {menuItems.map((item) => (
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              key={item.href}
              onClick={() => {
                const element = document.querySelector(item.href);
                if (element) {
                  const yOffset = -130; // сместим на 80px вверх (можешь изменить)
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                  setDrawerOpen(false); // закрыть drawer при клике
                }
              }}
              style={{ cursor: "pointer", padding: "0 10px", color: "white" }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      )}
      {!isMobile && (
        <Box className="appbar-contact">
          <Box className="appbar-phone">
            <PhoneIcon className="phone-icon" /> {/* Phone Icon */}
            <Typography variant="body1">
              <a
                href="tel:+13129997977 "
                style={{ color: "white", textDecoration: "none" }}
              >
                (312) 999-7977 
              </a>
            </Typography>
          </Box>
          <Box
            className="appbar-phone"
            onClick={() => {
              const element = document.querySelector("#contact-us");
              if (element) {
                const yOffset = -130;
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <Typography variant="body1">Schedule Service</Typography>
          </Box>

          <Box className="appbar-cart"></Box>
        </Box>
      )}
      {isMobile && (
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          width="100%"
        >
          <IconButton
            className="appbar-burger"
            onClick={toggleDrawer(!drawerOpen)}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      )}

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className="drawer"
      >
        <List className="drawer-list">
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.href}
              onClick={() => {
                const element = document.querySelector(item.href);
                if (element) {
                  const yOffset = -130;
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                setDrawerOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default AppBar;
