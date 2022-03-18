import React from "react";
import Image from "next/image";
import Space from "../styles/img/Logo-new.svg";
import Alien from "../styles/img/AlienFix.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Background from "../components/Background"
import confetti from 'canvas-confetti';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {useState} from "react"
function Welcome(props: any) {
  const { scrollYProgress } = useViewportScroll();
  const [SpeeedBg,setSpeeedBg] = useState<number>(0)
const HandleHover = () => {
setSpeeedBg(50)
console.log("this is hovering")

}
const handleConfetti = () => {
  confetti({
    zIndex: 999,
    particleCount: 100,
    spread: 70,
    
  });
}
  return (
    <div>
      <Background Speed = {SpeeedBg}/>
      <Grid container alignItems="center" justifyContent="center">
        <motion.div
          animate={{ x: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          initial={true}
        >
          <Box className="Welcome">
            <Image src={Space} width={1130} height={675} className="Move" />
          </Box>
        </motion.div>
        <motion.div style={{ scaleY: scrollYProgress }}>
          <Box className="WelcomeT">
            <Typography
              variant="h1"
              style={{
                fontFamily: "aquirebold",
                color: "white",
                fontSize: 96,
                transform: "skewX(10deg)",
              }}
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
        </motion.div>
        <Image src={Alien} width={549} height={360} className="Alien" />
        <div style={{ paddingTop: 100 }}>
        <motion.div whileHover={{scale:1.5,background:[
          "linear-gradient(to right, #f0f -200%, #0ff -100%, #f0f 0%, #0ff 100%)",
          "linear-gradient(to right, #f0f -100%, #0ff 0%, #f0f 100%, #0ff 200%)",
          "linear-gradient(to right, #f0f 0%, #0ff 100%, #f0f 200%, #0ff 300%)",
        ],borderRadius:100}}   >
        
          <Button
            style={{
              fontFamily: "aquirebold",
              color: "white",
              fontSize: 48,
              transform: "skewX(10deg)",
            }}
            onMouseOver={HandleHover}
            onMouseLeave={()=>setSpeeedBg(1)}
            onClick = {handleConfetti}
          >
            EXPLORE NOW
          </Button>
        
        </motion.div>
        </div>
      </Grid>
      
    </div>
  );
}


export default Welcome;
Welcome.defaultProps = {
  Name: "GUEST",
};
