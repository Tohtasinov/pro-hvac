import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import icon from "../../assets/logo HVAC.jpg";
import carrierLogo from "../../assets/logo_of_the_carrier_corporation.svg.webp"; // добавь свои пути
import bryantLogo from "../../assets/bryant-logo.webp";
import goodman from "../../assets/goodman-air-conditioning-and-heating-logo-vector.png";
import american_standart from "../../assets/889228.png";
import rheem from "../../assets/rheem11.png";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 450px)");

  return (
    <Box
      padding="60px 10px 20px 10px"
      backgroundColor="#8bbfd9"
      color="white"
      sx={{ overflowX: "hidden" }}
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        padding="20px 10px"
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? "20px" : "0",
        }}
      >
        {/* Logo + Description */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          justifyContent="start"
          textAlign="left"
          gap="20px"
        >
          <img
            src={icon}
            alt="PRO HVAC Logo"
            style={{
              width: "120px",
              borderRadius: "100px",
              marginTop: "-20px",
            }}
          />
          <Typography variant="body1" maxWidth={400}>
            We show up on time, work clean, and always give honest prices with
            no surprises. Whether it’s your home or small business, we’re here
            to help you stay cool in the summer and warm in the winter.
          </Typography>
        </Box>

        {/* Contact Info */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isSmallScreen ? "center" : "flex-start"}
          textAlign={isSmallScreen ? "center" : "left"}
        >
          <Typography
            variant="h6"
            sx={{ borderBottom: "2px solid #ED1C24", marginBottom: "10px" }}
          >
            Contact Information
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body1">Phone: (312) 999-7977 </Typography>
            <Typography variant="body1">
              Email: ibeisheev@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* Working Hours */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isSmallScreen ? "center" : "flex-start"}
          textAlign={isSmallScreen ? "center" : "left"}
        >
          <Typography
            variant="h6"
            sx={{ borderBottom: "2px solid #ED1C24", marginBottom: "10px" }}
          >
            Working Hours
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body1">
              Monday - Friday: 8:00AM - 8:00PM 
            </Typography>
            <Typography variant="body1">Saturday - Sunday: 8:30AM - 7:00PM</Typography>
          </Box>
        </Box>
      </Box>

      {/* Brand Logos */}
      <Box
        display="flex"
        justifyContent={isSmallScreen ? "center" : "flex-start"}
        alignItems="center"
        gap={8}
        marginY={4}
        flexWrap="wrap"
        marginLeft={isSmallScreen ? "0" : "100px"}
      >
        <img
          src={carrierLogo}
          alt="Carrier Logo"
          style={{ height: "100px", objectFit: "contain" }}
        />
        <img
          src={bryantLogo}
          alt="Bryant Logo"
          style={{ height: "130px", objectFit: "contain" }}
        />
        <img
          src={goodman}
          alt="Goodman Logo"
          style={{ height: "130px", objectFit: "contain" }}
        />
        <img
          src={american_standart}
          alt="American Standard Logo"
          style={{ height: "130px", objectFit: "contain" }}
        />
        <img
          src={rheem}
          alt="Rheem Logo"
          style={{
            height: "130px",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* Copyright */}
      <Box
        borderTop={"1px solid rgba(255, 255, 255, .07)"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        paddingY="10px"
      >
        <Typography
          variant="body1"
          sx={{
            marginLeft: isSmallScreen ? "0" : "50px",
            marginTop: "10px",
            marginBottom: "-10px",
          }}
        >
          Copyright © 2025 PRO HVAC Heating and Cooling. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
