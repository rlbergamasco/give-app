import { Typography, Box } from "@mui/material";
import { NativeShare, NonNativeShare } from "components";

export const SharePage = ({ cause, name }) => {
  const message = `Hi this is ${name}! I just made a donation to help ${cause}. Can you join me by donating a few dollars?`;
  return (
    <Box sx={{ maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" align="center">
        {`Thank you for donating to ${cause}!`}
      </Typography>
      <Typography align="center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        voluptate error perspiciatis earum illum laboriosam? Voluptatem
        accusamus eius culpa vitae similique distinctio officia cumque dolores
        libero, placeat, dignissimos laudantium ad.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        {navigator.share ?
          <NativeShare
            cause={cause}
            message={message}
          />
          :
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Invite friends to donate!
            </Typography>
            <NonNativeShare cause={cause} message={message} />
          </Box>
        }
      </Box>
    </Box>
  );
};