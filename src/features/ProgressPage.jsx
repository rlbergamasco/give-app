import React from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import {Typography, Button, Container, Paper, Box, Grid} from "@mui/material";

export const ProgressPage = () => {
  const data1 = {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ] 
        };
    
   const data2 = {
          columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
   };
    
   const data3 = {
          columns: [
            ["data1", 30, 200, 100, 400, 150, 250],
            ["data2", 50, 20, 10, 40, 15, 25],
            ["data3", 230, 200, 200, 300, 250, 250]
          ],
          types: {
            data1: "bar",
            data2: "bar",
            data3: "bar"
          },
          groups: [["data1", "data2", "data3"]] 
            };
    
  return (
    <React.Fragment>
        <div
            style={{
                  minHeight: "20em",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: 'center',
                  paddingTop: "3em",
                  
              }}
        >
            <div
               style={{
                    display: "flex",
                    flexBasis: "24em",
                    paddingRight: "0.2em",
                    paddingLeft: "0.2em"
                }} 
            >
               <C3Chart 
                   style={{
                        height: "20em"
                    }}
                   data={data1} />
            
            </div>
            <div
               style={{
                    display: "flex",
                    flexBasis: "24em",
                    paddingRight: "0.2em",
                    paddingLeft: "0.2em"
                   
                    
                }} 
            >
                <C3Chart 
                   style={{
                        height: "20em"
                    }}
                   data={data2} />
            
            </div>
            <div
               style={{
                    display: "flex",
                    flexBasis: "24em",
                    paddingRight: "0.2em",
                    paddingLeft: "0.2em"
                    
                }} 
            >
                <C3Chart 
                   style={{
                        height: "20em"
                    }}
                   data={data3} />
            
            </div>
            <div
                style={{
                    paddingTop: "50px",
                    
                }}
            >
               <Button
                    href="/give"
                    variant="contained"
                    style={{backgroundColor: "#f26969",
                            height: "3em",
                           
                           }}
                    
                >
                    Donate
                </Button>
            </div>
          
        </div>
      
      
      
      
    </React.Fragment>
  );
};
