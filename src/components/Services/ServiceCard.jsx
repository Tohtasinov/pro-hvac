import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card sx={{ height: "100%", boxShadow: 3 }}>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
