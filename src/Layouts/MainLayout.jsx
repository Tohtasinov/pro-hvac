import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";
import ReasonsToChoose from "../components/ReasonsToChoose/ReasonsToChoose";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";
import ChatButton from "../components/ChatBot/ChatButton";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";


const MainLayout = (props) => {
  return (
    <Box color={"white"}>
      <Header />
      <Services />
      <AppointmentForm />
      <AboutUs />
      {/* <HowItWorks /> */}
      <ReasonsToChoose />
      <Reviews />
      <Footer />
      <ChatButton />
    </Box>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
