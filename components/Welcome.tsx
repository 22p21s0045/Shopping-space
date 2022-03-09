import React from "react";
import Image from "next/image";
import Space from "../styles/img/Space shop Real.svg";
import Alien from "../styles/img/AlienFix.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
function Welcome(props: any) {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <motion.div
          animate={{ x: 100, y: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          initial={true}
        >
          <Box className="Welcome">
            <Image src={Space} width={1130} height={675} className="Move" />
          </Box>
        </motion.div>
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
        </Box>
        <Image src={Alien} width={549} height={360} className="Alien" />
        <div style={{ paddingTop: 100 }}>
          <Button
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 48 }}
          >
            EXPLORE NOW
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default Welcome;
Welcome.defaultProps = {
  Name: "GUEST",
};
