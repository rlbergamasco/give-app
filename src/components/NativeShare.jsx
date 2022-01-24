import React from "react";
import { Button } from "@mui/material";

export const NativeShare = ({ cause, message }) => {

  const handleClick = () => {
    navigator
      .share({
        title: `Donate to ${cause}!`,
        url: "/give",
        text: message,
      })
      .then(() => {
        console.log("success");
      })
      .catch(console.error);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Invite friends to donate
    </Button>
  );
};
