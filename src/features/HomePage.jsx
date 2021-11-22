import React from "react";
import {Typography, Button, Container, Paper, Box, Grid} from "@mui/material";
import asset1 from "../asset1.png";
import pic1 from "../headshot/1.jpg";
import pic2 from "../headshot/2.jpg";
import pic3 from "../headshot/3.jpg";
import pic4 from "../headshot/4.jpg";
import pic5 from "../headshot/5.jpg";
import pic6 from "../headshot/6.jpg";

export const HomePage = () => {
  const picArray1 = [pic1, pic2, pic3, pic4, pic5, pic6];
  // const picArray2 = [pic4, pic5, pic6];
  return (
    <React.Fragment>
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "50px",
          paddingRight: "50px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#6cbad9",
          minHeight: "18em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexBasis: "40em",
            gap: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" align="left">
            Donate Today, Better Tomorrow
          </Typography>
          <Typography variant="body2" align="left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam amet
            doloribus eius sequi impedit aliquam obcaecati cumque voluptas,
            dolorem porro labore nam, et minima saepe quas, error voluptatibus
            dolores sint?
          </Typography>
          <Button
            href="/give"
            variant="contained"
            style={{backgroundColor: "#f26969"}}
          >
            Donate
          </Button>
        </div>
        <div
          style={{
            flexBasis: "20em",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "70%",
              margin: "auto",
            }}
            src={asset1}
          />
        </div>
      </div>

      <div
        style={{
          padding: "100px 20%",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" align="center">
          Give-it Project
        </Typography>
        <Typography variant="body2" align="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam amet
          doloribus eius sequi impedit aliquam obcaecati cumque voluptas,
          dolorem porro labore nam, et minima saepe quas, error voluptatibus
          dolores sint?
        </Typography>
      </div>

      <div
        style={{
          padding: "50px",
          display: "flex",
          gap: "50px",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#a2b3c9",
        }}
      >
        <Typography variant="h4" align="left">
          People
        </Typography>
        <Typography variant="body2" align="left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam amet
          doloribus eius sequi impedit aliquam obcaecati cumque voluptas,
          dolorem porro labore nam, et minima saepe quas, error voluptatibus
          dolores sint?
        </Typography>
      </div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          gap: "50px",
          flexDirection: "column",
          backgroundColor: "#a2b3c9",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "3em",
            justifyContent: "space-between",
          }}
        >
          {picArray1.map((pic, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexBasis: "20em",
                alignItems: "center",
              }}
            >
              <img style={{width: "100%", borderRadius: "0"}} src={pic} />
              <p>Test</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
