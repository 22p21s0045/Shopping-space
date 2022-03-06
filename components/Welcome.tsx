import React from "react";
import Image from "next/image";
import Space from "../styles/img/Space shop Real.svg";
import Alien from "../styles/img/AlienFix.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
function Welcome(props: any) {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Box className="Welcome">
          <Image src={Space} width={1130} height={675} className="Move" />
        </Box>
        <Box>
          <Typography
            variant="h1"
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 96 }}
          >
            WELCOME TO SPACE
          </Typography>
          <Typography
            variant="h1"
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 24 }}
            align="center"
          >
            HELLO {props.Name}
          </Typography>

          <Image src={Alien} width={549} height={360} className="Move" />
        </Box>
      </Grid>
    </div>
  );
}

export default Welcome;
Welcome.defaultProps = {
  Name: "GUEST",
};
