import React from "react";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Boy from "../styles/img/404/boy.gif";
import Ghostboy from "../styles/img/404/newghost.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Background from "../components/Background";
import Oops from "../styles/img/404/oops.svg";
import { fontSize } from "@mui/system";
function Cutom404() {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={8} md={12} sx={{ height: "50%" }}>
          <Typography
            sx={{ textAlign: "center", fontFamily: "Jeju" }}
            fontSize={{ lg: 96, md: 72, sm: 48, xs: 48 }}
          >
            404 not found
          </Typography>
          <Link href="/explore">
            <Button
              sx={{
                marginLeft: "65%",
                marginTop: "10%",
                backgroundColor: "#FF6B6B",
                maxWidth: "350px",
                maxHeight: "146px",
                minWidth: "175px",
                minHeight: "75px",
                borderRadius: 100,
                color: "black",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                  tranform: "scale(1.2)",
                },
                fontFamily: "Jeju",
                fontSize: 30,
              }}
            >
              Back to shop
            </Button>
          </Link>
          <Image src={Oops} />
        </Grid>
        <Grid item lg={4} md={12}>
          <Image src={Boy} />
        </Grid>
        <Grid item lg={4} sx={{ marginTop: 0 }}></Grid>
      </Grid>
      <Background color="#FFF8D5" />
    </div>
  );
}

export default Cutom404;
