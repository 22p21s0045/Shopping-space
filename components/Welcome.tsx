import React from "react";
import Image from "next/image";
import Space from "../styles/img/Space shop Real.svg";
import Alien from "../styles/img/Alien.svg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
function Welcome() {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
      <Box className="Welcome">
      <Image src={Space} width={1130} height={675} />
      </Box>
      <Box>
        <Typography variant="h1" style={{ fontFamily: "aquirebold", color: "white",fontSize: 24 }}>
          WELCOME TO SPACE
        </Typography>

      </Box>
      </Grid>
    </div>
  );
}

export default Welcome;
