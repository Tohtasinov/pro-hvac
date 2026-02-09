import React from "react";
import "./ReasonsToChoose.css";
import image from "../../assets/HVACCC.jpg";
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
    title: "Customer Satisfaction Guarantee",
    description:
      "We are committed to providing exceptional HVAC services that prioritize your comfort and satisfaction at every step.",
  },
  {
    icon: toolsIcon,
    title: "Experienced HVAC Technicians",
    description:
      "Our team consists of skilled, certified professionals with extensive experience in diagnosing and solving all HVAC challenges.",
  },
  {
    icon: priceTagIcon,
    title: "Transparent & Honest Pricing",
    description:
      "We believe in upfront, clear pricing with no hidden fees, ensuring you know exactly what to expect for your heating and cooling services.",
  },
  {
    icon: customerServiceIcon,
    title: "Friendly Customer Support",
    description:
      "Our dedicated support team is here to answer your questions and provide guidance, making your HVAC experience seamless and stress-free.",
  },
  {
    icon: warrantyIcon,
    title: "Reliable Warranty Coverage",
    description:
      "We stand by our work, offering warranties on both parts and labor to give you confidence and peace of mind for your HVAC investment.",
  },
  {
    icon: safetyIcon,
    title: "Safety & Quality Standards",
    description:
      "We strictly follow industry standards and safety protocols in every project, ensuring the well-being of your property and family.",
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
