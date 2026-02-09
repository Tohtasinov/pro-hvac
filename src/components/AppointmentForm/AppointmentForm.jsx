import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  Paper,
} from "@mui/material";
import photo from "../../assets/photo_2025-07-09_06-18-08.jpg";

const AppointmentForm = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    appointmentType: "",
    bestTime: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username: formData.name,
      phoneNumber: formData.phone,
      email: formData.email,
      subject: formData.appointmentType,
      address: formData.address,
      bestTime: formData.bestTime,
    };

    try {
      const response = await fetch("https://prohvac.info/api/sendEmail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Request submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          appointmentType: "",
          bestTime: "",
        });
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.error);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred while sending your request.");
    }
  };

  return (
    <Box
      id="contact-us"
      sx={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 5,
        px: 2,
        overflowX: "hidden",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 500,
          mx: "auto",
          borderRadius: "16px",
          p: isMobile ? 2 : 3,
          backgroundColor: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(3px)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#004d99",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Request an Appointment
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Appointment Type</InputLabel>
                <Select
                  name="appointmentType"
                  value={formData.appointmentType}
                  label="Appointment Type"
                  onChange={handleChange}
                >
                  <MenuItem value="Schedule Service or Repair">
                    Schedule Service or Repair
                  </MenuItem>
                  <MenuItem value="New or Replacement System">
                    New or Replacement System
                  </MenuItem>
                  <MenuItem value="Ask a General Question">
                    Ask a General Question
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Best time to contact you</InputLabel>
                <Select
                  name="bestTime"
                  value={formData.bestTime}
                  label="Best time to contact you"
                  onChange={handleChange}
                >
                  <MenuItem value="8am - 11am">8am - 11am</MenuItem>
                  <MenuItem value="11am - 3pm">11am - 3pm</MenuItem>
                  <MenuItem value="3pm - 6pm">3pm - 6pm</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  py: 1.2,
                  fontWeight: 600,
                  background: "linear-gradient(to right, #1976d2, #004ba0)",
                  color: "#fff",
                  "&:hover": {
                    background: "linear-gradient(to right, #125ea2, #003d80)",
                  },
                }}
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AppointmentForm;
