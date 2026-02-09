import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import cooling from "../../assets/Cooling_services.jpg";
import heating from "../../assets/heating1.jpg";
import water_heaters from "../../assets/water_heaters.jpg";

const categories = [
  {
    name: "Cooling Services",
    color: "#A7D7F9",
    colorDark: "#4da5db",
    image: cooling,
    services: [
      "AC Install",
      "AC Repair",
      "AC Maintenance",
      "Ductless Mini-Splits",
      "Install Thermostat",
    ],
    description:
      "Need AC repair or a brand-new cooling system installed? Count on us for reliable service that keeps your home comfortable all summer.",
  },

  {
    name: "Heating Services",
    color: "#ED1C24",
    colorDark: "#b4121b",
    image: heating,
    services: [
      "Install Heating System",
      "Furnace Repair",
      "Furnace Replacement",
      "Furnace Maintenance",
      "Install Thermostat",
    ],
    description:
      "Need furnace repair or a brand-new heating system installed? We provide dependable service to keep your home warm all winter.",
  },
  {
    name: ["Water Heaters"],
    color: "#f5f5f5",
    colorDark: "#333",
    image: water_heaters,
    services: [
      "Water Heater Repair",
      "Water Heater Replacement",
      "Water Heater Maintenance",
      "Tankless Water Heaters",
    ],
    description:
      "Need water heater repair or thinking about a new installation? We provide fast, reliable service to keep your hot water running.",
  },
  {
    name: ["Appliance Repair"],
    color: "#f5f5f5",
    colorDark: "#333",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/050/623/994/small_2x/two-construction-workers-on-a-roof-inspecting-an-ac-unit-photo.jpeg",
    services: [
      "Refrigerator Repair",
      "Washer and Dryer Repair",
      "Dishwasher Repair",
      "Oven and Stove Repair",
      "Garbage Disposal",
    ],
    description:
      "Professional appliance repair for all major household appliances. Fast diagnostics and reliable fixes you can trust.",
  
  },
];

const Services = () => {
  return (
    <Box id="services">
      {/* Заголовок страницы */}
      <Typography
        variant="h2"
        align="center"
        sx={{ fontWeight: "bold", mt: 6, mb: -2, color: "#333" }}
      >
        <span style={{ color: "#ED1C24", fontWeight: "bold" }}>Heating</span> &{" "}
        <span style={{ color: "#4da5db", fontWeight: "bold" }}>Cooling</span>
      </Typography>

      <Box sx={{ py: 8, px: 2 }}>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper
                elevation={6}
                sx={{
                  background: `linear-gradient(180deg, ${category.color} 0%, ${category.colorDark} 100%)`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  color:
                    category.name === "HVAC Services" ||
                    category.name === "Heating Services"
                      ? "#333"
                      : "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
                  },
                }}
              >
                {/* Новый стиль изображения с overlay и заголовком */}
                <Box
                  sx={{
                    position: "relative",
                    height: "200px",
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.65))",
                      display: "flex",
                      alignItems: "flex-end",
                      px: 2,
                      pb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        zIndex: 1,
                      }}
                    >
                      {Array.isArray(category.name)
                        ? category.name.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < category.name.length - 1 && <br />}
                            </React.Fragment>
                          ))
                        : category.name}
                    </Typography>
                  </Box>
                </Box>

                {/* Контент карточки */}
                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Divider
                    sx={{
                      borderColor:
                        category.name === "HVAC Services" ||
                        category.name === "Heating Services"
                          ? "#333"
                          : "#fff",
                      mb: 2,
                    }}
                  />

                  <Stack
                    direction="column"
                    spacing={0.1}
                    flexWrap="wrap"
                    rowGap={1.5}
                    sx={{ mb: 2 }}
                  >
                    {category.services.map((service, i) => (
                      <Chip
                        key={i}
                        label={service}
                        sx={{
                          background:
                            category.name === "HVAC Services" ? "#333" : "#fff",
                          color:
                            category.name === "HVAC Services"
                              ? "#fff"
                              : category.colorDark,
                          fontWeight: "bold",
                          mr: 1,
                          mb: 1.5,
                        }}
                      />
                    ))}
                  </Stack>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {category.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
