import React, { useState, useEffect } from "react";
import { Box, Typography, Chip } from "@mui/material";
import "./AboutUs.css";

import photo1 from "../../assets/HVACCC.jpg";
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
  { src: photo3, alt: "Work 3", sizeClass: "medium" },
  { src: photo6, alt: "Work 6", sizeClass: "large" },
  { src: photo7, alt: "Work 7", sizeClass: "large" },
  { src: photo8, alt: "Work 8", sizeClass: "large" },
  { src: photo9, alt: "Work 9", sizeClass: "medium" },

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
    { src: photo3, alt: "Work 3", sizeClass: isMobile ? "large" : "medium" },
    { src: photo6, alt: "Work 6", sizeClass: "large" },
    { src: photo7, alt: "Work 7", sizeClass: "large" },
    { src: photo8, alt: "Work 8", sizeClass: "large" },
    { src: photo9, alt: "Work 9", sizeClass: isMobile ? "large" : "medium" },
  ];

  return (
    <Box id="about-us" className="about-us-container">
      <Box className="about-us-text">
        <Typography variant="h4" className="about-title">
          About PRO HVAC <span className="heating-text">Heating</span> and{" "}
          <span className="cooling-text">Cooling</span>
        </Typography>
        <Typography variant="body1" className="about-text">
          At Pro HVAC Heating and Cooling, your comfort is our mission. We are a
          locally owned and operated company proudly serving our community with
          top-quality heating, cooling, and indoor air solutions. Whether it’s a
          new system installation, routine maintenance, or an emergency repair,
          we bring the experience, tools, and dedication needed to get the job
          done right.
          <br />
          <br />
          With years of hands-on expertise, EPA-certified technicians, and a
          commitment to honest, reliable service, we’ve built our reputation one
          satisfied customer at a time. We specialize in residential and light
          commercial HVAC systems and are fully licensed and insured for your
          peace of mind.
          <br />
          <br />
          We don’t believe in shortcuts — just solid workmanship, transparent
          pricing, and fast, friendly service you can count on. At Pro HVAC, we
          treat your home like it’s our own.
          <br />
          <br />
          Whether it’s the heat of summer or the chill of winter, trust Pro HVAC
          Heating and Cooling to keep your home comfortable year-round.
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
