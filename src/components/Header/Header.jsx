import React from "react";
import "./Header.css";
import { Box, useMediaQuery } from "@mui/material";
import AppBar from "../AppBar/AppBar";
import { motion } from "framer-motion";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleContactUsClick = () => {
    window.open("tel:(312)999-7977 ");
  };

  const handleScheduleServiceClick = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePromoClick = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box id="home">
      <AppBar />
      <Box className="header">
        <Box className="header-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span style={{ color: "#ED1C24" }}>Heating</span> and{" "}
            <span style={{ color: "#4da5db" }}>Cooling</span> Experts
          </motion.h1>

          {!isMobile && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ color: "white" }}
            >
              Heating, Cooling & Emergency Services 24/7 - Serving Chicago and
              Surrounding Suburbs
            </motion.p>
          )}

          <motion.div
            className="header-buttons"
            style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="contact-us" onClick={handleContactUsClick}>
              Contact Us
            </button>
            <button className="schedule-service" onClick={handleScheduleServiceClick}>
              Schedule Service
            </button>
          </motion.div>
        </Box>

        {/* Promo card */}
        <motion.div
          className="promo-card"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <div className="promo-top">LIMITED TIME OFFER!</div>

          <div className="promo-prices">
            <div className="promo-old">$129</div>
            <div className="promo-now">Now only</div>
          </div>

          <div className="promo-main">$89</div>

          <div className="promo-sub">Get any service for just $89</div>

          <button className="promo-cta" onClick={handlePromoClick}>
            Get Started Now
          </button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Header;
