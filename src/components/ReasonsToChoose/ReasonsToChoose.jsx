import React from "react";
import "./ReasonsToChoose.css";
import image from "../../assets/logo-airFix.jpeg";
import houseRepairIcon from "../../assets/home-icon.png";
import toolsIcon from "../../assets/tools.png";
import priceTagIcon from "../../assets/price.png";
import customerServiceIcon from "../../assets/customer-service.png";
import warrantyIcon from "../../assets/warranty.png";
import safetyIcon from "../../assets/safety.png";
import { Box } from "@mui/material";

const reasons = [
  {
    icon: houseRepairIcon,
    title: "Trusted Local Company",
    description:
      "AirFix is a locally owned company focused on long-term customer relationships, not one-time repairs.",
  },
  {
    icon: toolsIcon,
    title: "Skilled & Certified Technicians",
    description:
      "Our technicians are licensed, EPA-certified, and experienced in HVAC and appliance repair.",
  },
  {
    icon: priceTagIcon,
    title: "Upfront Pricing",
    description:
      "You get clear options and honest pricing before any work begins. No hidden fees, no surprises.",
  },
  {
    icon: customerServiceIcon,
    title: "Fast & Friendly Service",
    description:
      "We respect your time. Same-day service and responsive support when you need help the most.",
  },
  {
    icon: warrantyIcon,
    title: "Work You Can Rely On",
    description:
      "We stand behind our repairs with warranty coverage on parts and labor for your peace of mind.",
  },
  {
    icon: safetyIcon,
    title: "Safety First, Always",
    description:
      "Every job is completed following strict safety and quality standards to protect your home.",
  },
];


const ReasonsToChoose = () => {
  return (
    <Box className="reasons-container">
      <h2 className="reasons-title">6 Reasons To Choose Our HVAC Company</h2>
      <Box className="reasons-content">
        <Box className="reasons-grid">
          {reasons.slice(0, 3).map((reason, index) => (
            <Box key={index} className="reason-card">
              <Box className="icon">
                <img src={reason.icon} alt={`${reason.title} icon`} />
              </Box>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </Box>
          ))}
        </Box>
        <Box className="image-container">
          <img src={image} alt="Technician" className="center-image" />
        </Box>
        <Box className="reasons-grid">
          {reasons.slice(3).map((reason, index) => (
            <Box key={index} className="reason-card">
              <Box className="icon">
                <img
                  style={{ backgroundColor: "#1d61d7" }}
                  src={reason.icon}
                  alt={`${reason.title} icon`}
                />
              </Box>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReasonsToChoose;
