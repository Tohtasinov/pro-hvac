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
      author: "John Smith from Chicago",
      quote:
        "The heating system installation was quick and professional. I feel cozy all winter thanks to their expertise!",
    },
    {
      id: 2,
      author: "Emily Johnson from Evanston",
      quote:
        "Excellent AC repair service! They fixed my unit the same day and it’s running perfectly.",
    },
    {
      id: 3,
      author: "Michael Lee from Oak Lawn",
      quote:
        "Friendly and knowledgeable technicians. They helped me choose the right HVAC system for my home and installed it flawlessly.",
    },
    {
      id: 4,
      author: "Sarah Davis from Naperville",
      quote:
        "Prompt and reliable emergency service when my heater stopped working. Highly recommend this company!",
    },
    {
      id: 5,
      author: "David Martinez from Chicago",
      quote:
        "Great customer support and competitive pricing. My air conditioning has never worked better.",
    },
    {
      id: 6,
      author: "Lisa Brown from Skokie",
      quote:
        "Professional team and very courteous technicians. The ductless heating and cooling system they installed is fantastic!",
    },
    {
      id: 7,
      author: "Robert Wilson from Schaumburg",
      quote:
        "They provided a thorough maintenance service for my HVAC system and gave me great advice on energy savings.",
    },
    {
      id: 8,
      author: "Patricia Taylor from Aurora",
      quote:
        "Fast response and expert repair on my furnace. Very happy with the quality of work and reasonable prices.",
    },
    {
      id: 9,
      author: "James Anderson from Des Plaines",
      quote:
        "The team was very professional and respectful of my home while installing a new thermostat and heating system.",
    },
    {
      id: 10,
      author: "Karen Thomas from Oak Park",
      quote:
        "Reliable and efficient service for both heating and cooling. I trust them for all my HVAC needs.",
    },
  ];

  return (
    <Box id="reviews" sx={{ px: { xs: "16px", md: "100px" }, mb: "100px" }}>
      <Typography
        variant="h4"
        sx={{ my: "80px", textAlign: "center", color: "black" }}
      >
        OUR HAPPY CUSTOMERS
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
