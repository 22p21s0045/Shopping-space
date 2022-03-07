import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function Sponsor() {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center" style ={{paddingTop: 100}}>
        <Box className="Sponsor">
          <Typography
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 48 }}
          >
            SPONSOR
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Sponsor;
