import { Typography, Box } from "@mui/material";
import { ShareButton } from "components";

export const SharePage = ({ cause, name }) => {
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
        <ShareButton
          cause={cause}
          message={`Hi this is ${name}! I just made a donation to help ${cause}. Can you join me by donating a few dollars?`}
        />
      </Box>
    </Box>
  );
};
