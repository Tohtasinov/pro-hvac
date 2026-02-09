import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

 const list = [
    {
      id: 1,
      author: "John S. Chicago",
      quote:
        "AirFix came the same day and fixed our AC fast. Clear pricing and very professional.",
    },
    {
      id: 2,
      author: "Emily J. Evanston",
      quote:
        "Great furnace repair service. The technician explained everything and had it running in no time.",
    },
    {
      id: 3,
      author: "Michael L. Oak Lawn",
      quote:
        "We replaced our HVAC system with AirFix. Smooth install, clean work, and great communication.",
    },
    {
      id: 4,
      author: "Sarah D. Naperville",
      quote:
        "Emergency call at night, and they still helped us quickly. Really reliable team.",
    },
    {
      id: 5,
      author: "David M. Skokie",
      quote:
        "Maintenance visit was thorough. They checked everything and gave helpful tips to save energy.",
    },
    {
      id: 6,
      author: "Lisa B. Schaumburg",
      quote:
        "AirFix installed a smart thermostat and tuned the system. Home feels much more comfortable now.",
    },
    {
      id: 7,
      author: "Robert W. Des Plaines",
      quote:
        "Water heater repair was quick and affordable. Tech was polite and explained the problem clearly.",
    },
    {
      id: 8,
      author: "Patricia T. Oak Park",
      quote:
        "Appliance repair was excellent. They fixed our dryer the same day and it works like new.",
    },
    {
      id: 9,
      author: "James A. Cicero",
      quote:
        "Our refrigerator stopped cooling and AirFix diagnosed it fast. Honest service and fair price.",
    },
    {
      id: 10,
      author: "Karen T. Chicago",
      quote:
        "We use AirFix for both heating and cooling. Consistent quality every time.",
    },
  ]

  return (
    <Box id="reviews" sx={{ px: { xs: "16px", md: "100px" }, mb: "100px" }}>
      <Typography
        variant="h4"
        sx={{ my: "80px", textAlign: "center", color: "black" }}
      >
                What Customers Say About AirFix

      </Typography>
      <Swiper
        loop={true}
        loopedSlides={list.length}
        initialSlide={3}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : 3}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={isMobile ? false : true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewCard review={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Reviews;
