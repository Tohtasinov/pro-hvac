// src/components/HowItWorks.js
import React from "react";
import "./HowItWorks.css"; // Import a CSS file for styling
import { Box } from "@mui/material";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnosis",
      description:
        "Technicians use diagnostic tools and their expertise to identify the root cause of the problem.",
    },
    {
      number: "02",
      title: "Repair",
      description:
        "The repair process involves replacing faulty parts or repairing damaged components to restore functionality.",
    },
    {
      number: "03",
      title: "Quality Check",
      description:
        "After the repair is completed, the device is tested to ensure that the problem is fixed.",
    },
  ];

  return (
    <Box className="how-it-works-container">
      <h2 color="white !important">How It Works</h2>
      <Box className="steps">
        {steps.map((step, index) => (
          <Box key={index} className="step">
            <Box className="step-number">{step.number}</Box>
            <Box className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;
