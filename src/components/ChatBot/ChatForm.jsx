import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const menuProps = {
  disablePortal: true,
  PaperProps: {
    style: {
      maxHeight: 200,
      width: 300,
      zIndex: 1500,
      left: 0,
      right: "auto",
      overflowY: "auto",
    },
  },
};

const ChatForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    appointmentType: "",
    bestTime: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        username: formData.name,
        phoneNumber: formData.phone,
        email: formData.email,
        subject: formData.appointmentType,
        address: formData.address,
        bestTime: formData.bestTime,
      };

      const response = await fetch("https://prohvac.info/api/sendEmail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Ошибка при отправке формы");

      alert("Форма успешно отправлена!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        appointmentType: "",
        bestTime: "",
      });
      onClose();
    } catch (error) {
      alert("Не удалось отправить форму");
      console.error(error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        color: "#152339",
        padding: "20px",
        borderRadius: "10px",
        width: 400,
        maxWidth: 400,
        backgroundColor: "white",
        "@media (max-width: 600px)": {
          width: "80%",
          right: "5%",
          left: "5%",
        },
      }}
    >
      <IconButton
        sx={{ position: "absolute", top: 5, right: 5 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
        Request an Appointment
      </Typography>

      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
          <Select
            labelId="appointment-type-label"
            name="appointmentType"
            value={formData.appointmentType}
            label="Appointment Type"
            onChange={handleChange}
            MenuProps={menuProps}
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

        <FormControl fullWidth margin="normal" required>
          <InputLabel id="best-time-label">Best time to contact you</InputLabel>
          <Select
            labelId="best-time-label"
            name="bestTime"
            value={formData.bestTime}
            label="Best time to contact you"
            onChange={handleChange}
            MenuProps={menuProps}
          >
            <MenuItem value="8am - 11am">8am - 11am</MenuItem>
            <MenuItem value="11am - 3pm">11am - 3pm</MenuItem>
            <MenuItem value="3pm - 6pm">3pm - 6pm</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            mt: 2,
            background: "linear-gradient(90deg, #5F7EEA 0%, #5FC4EA 100%)",
            color: "#fff",
            width: "200px",
            display: "block",
            mx: "auto",
          }}
        >
          Submit Request
        </Button>
      </form>
    </Paper>
  );
};

export default ChatForm;
