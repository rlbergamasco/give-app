import React from "react";
import { Button } from "@mui/material";

export const ShareButton = ({ cause, message }) => {
  const url = "/give";

  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Donate to ${cause}!`,
          url: url,
          text: message,
        })
        .then(() => {
          console.log("success");
        })
        .catch(console.error);
    } else {
      alert("no native sharing: " + message);
    }
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Invite friends to donate
    </Button>
  );
};
