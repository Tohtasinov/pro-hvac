import React, { useState, useEffect } from "react";
import { Box, Typography, Chip } from "@mui/material";
import "./AboutUs.css";

import photo1 from "../../assets/AirFix.jpg";
import photo2 from "../../assets/photo_2025-07-09_06-17-37.jpg";
import photo3 from "../../assets/photo_2025-07-09_06-17-58.jpg";
import photo4 from "../../assets/photo_2025-07-09_06-18-08.jpg";
import photo5 from "../../assets/heating_services.jpg";
import photo6 from "../../assets/Cooling_services.jpg";
import photo7 from "../../assets/About_us_photo.jpg";
import photo8 from "../../assets/About-us_photo1.jpg";
import photo9 from "../../assets/About-us_photo2.jpg";

// можно добавить сюда новые фотки и задавать им sizeClass (large, medium, small)
const galleryImages = [
  { src: photo1, alt: "Work 1", sizeClass: "large" },
  { src: photo1, alt: "Work 3", sizeClass: "medium" },
  { src: photo1, alt: "Work 6", sizeClass: "large" },
  { src: photo1, alt: "Work 7", sizeClass: "large" },
  { src: photo1, alt: "Work 8", sizeClass: "large" },
  { src: photo1, alt: "Work 9", sizeClass: "medium" },

  // Добавьте здесь новые фото, например:
  // { src: photo7, alt: "Work 7", sizeClass: "small" },
];

const calculateJobsDone = () => {
  const startDate = new Date("2024-07-09");
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const baseNumber = 32026;
  return baseNumber + daysDifference * 3;
};

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryImages = [
    { src: photo1, alt: "Work 1", sizeClass: "large" },
    { src: photo1, alt: "Work 3", sizeClass: isMobile ? "large" : "medium" },
    { src: photo1, alt: "Work 6", sizeClass: "large" },
    { src: photo1, alt: "Work 7", sizeClass: "large" },
    { src: photo1, alt: "Work 8", sizeClass: "large" },
    { src: photo1, alt: "Work 9", sizeClass: isMobile ? "large" : "medium" },
  ];

  return (
    <Box id="about-us" className="about-us-container">
      <Box className="about-us-text">
        <Typography variant="h4" className="about-title">
         About <span className="aboutBrand">AirFix</span>{" "}
          <span className="heating-text">Heating</span> &{" "}
          <span className="cooling-text">Cooling</span>
        </Typography>
        <Typography variant="body1" className="about-text">
          At AirFix Heating & Cooling, your comfort is our priority. We are a locally owned and
          operated company providing professional heating, cooling, and appliance repair services
          for homes and small businesses.
          <br />
          <br />
          From new HVAC system installations and routine maintenance to same-day emergency repairs,
          our experienced technicians are ready to help. We service all major brands and use quality
          parts to ensure long-lasting, reliable results.
          <br />
          <br />
          Our team is fully licensed, insured, and EPA-certified, with a strong focus on honest
          recommendations and upfront pricing. No shortcuts, no hidden fees, just dependable service
          you can trust.
          <br />
          <br />
          Whether it is the heat of summer or the cold of winter, AirFix is here to keep your home
          comfortable, efficient, and running smoothly all year round.
        </Typography>

        <Box className="about-features">
          <Chip label="Certified HVAC Technicians" className="feature-chip" />
          <Chip label="24/7 Emergency Service" className="feature-chip" />
          <Chip
            label="Quality Installations & Repairs"
            className="feature-chip"
          />
          <Chip label="Energy-Efficient Solutions" className="feature-chip" />
        </Box>
      </Box>

      <Box className="about-gallery">
        {galleryImages.map(({ src, alt, sizeClass }, idx) => (
          <img
            key={idx}
            src={src}
            alt={alt}
            className={`gallery-image ${sizeClass}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;