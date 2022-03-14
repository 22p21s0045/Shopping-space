import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function Down() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#916BBF", height: 70 }}>
            <Typography style ={{position: "relative" ,top:"40%",left:"50%",fontSize:24,fontFamily: "aquirebold"}}>MADE BY SPACE LOVER</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Down;
