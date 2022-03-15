import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {AiFillGithub} from "react-icons/ai"
function Down() {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#916BBF", height: 70 }} justifyContent = "center">
            <Typography style ={{position: "relative" ,textAlign: "center",top:"30%",fontSize:24,fontFamily: "aquirebold"}}>MADE BY SPACE LOVER ❤️</Typography>
            <a href ="https://www.w3schools.com/css/css_align.asp">
            <AiFillGithub style ={{position: "relative" ,left:"50%"}}/>
            </a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Down;
