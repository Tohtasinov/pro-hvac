import React, {  useState } from "react";
import ChatForm from "./ChatForm";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import chatIcon from "../../assets/chatIcon.png";
import Phone from "../../assets/phone-call.png";

const ChatButton = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSpeedDialOpen, setSpeedDialOpen] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSpeedDialOpen = () => {
    setSpeedDialOpen(true);
  };

  const handleSpeedDialClose = () => {
    setSpeedDialOpen(false);
  };

  const handleChatButtonClick = () => {
    toggleForm();
    handleSpeedDialClose();
  };

  const handlePhoneButtonClick = () => {
    window.open("tel:(312) 999-7977");
    handleSpeedDialClose();
  };

  const speedDialActions = [
    {
      icon: (
        <img
          src={chatIcon}
          alt="Chat Icon"
          style={{ height: "30px", width: "30px" }}
        />
      ),
      name: "Чат бот",
      action: handleChatButtonClick,
    },
    {
      icon: (
        <img
          src={Phone}
          alt="Phone Number"
          style={{ height: "30px", width: "30px" }}
        />
      ),
      name: "Phone Number",
      action: handlePhoneButtonClick,
    },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial example"
        style={{ zIndex: "9998" }}
        icon={
          <AddIcon
            sx={{
              fontSize: "30px",
              backgroundColor: "#ed1c24",
              padding: "15px",
              borderRadius: "50%",
            }}
          />
        }
        onClose={handleSpeedDialClose}
        onOpen={handleSpeedDialOpen}
        open={isSpeedDialOpen}
        direction="up"
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          color: "#5FC4EA",
          boxShadow: "none !important",
        }}
        onMouseEnter={handleSpeedDialOpen}
        onMouseLeave={handleSpeedDialClose}
      >
        {speedDialActions.map((action, index) => (
          <SpeedDialAction
            sx={{
              width: "50px",
              height: "50px",
            }}
            key={action.name}
            icon={React.cloneElement(action.icon, { sx: { fontSize: "30px" } })}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>

      {isFormVisible && <ChatForm onClose={() => setFormVisible(false)} />}
    </>
  );
};

export default ChatButton;
