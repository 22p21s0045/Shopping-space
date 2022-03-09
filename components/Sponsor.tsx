import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Animated } from "react-animated-css";
import { motion } from "framer-motion";
import axios from "axios";

function Sponsor() {
  const fetchSponsor = async () => {
    const get = await axios.get("http://localhost:1337/api/sponsors/", {
      headers: {
        Authorization: `Bearer ${"54d7d3bc628a23e27006f902f3a4d249306ef1dbdd0757356c224b7da18bda92f3c58af9230ffe97478f1ec4f06afa4d58f43d0074743af05d28056e7fb15878334af0aa8af4af08233e77a1fab244188c04b3d4cfdd359b9d7e3b48a5348767fb73fcdc78fa0bf65e661988fb19b56cc509b5c6ac4eade569d48b0d335f8b9d"}`,
      },
    });
    return get.data;
  };
  const { isLoading, isError, data, error } = useQuery("sponsor", fetchSponsor);
  if (isLoading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 100 }}
      >
        <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
          <Typography
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 48 }}
          >
            SPONSOR
          </Typography>
          <Skeleton
            variant="rectangular"
            width={500}
            height={500}
            style={{ backgroundColor: "#fff" }}
          />
          ;
        </Animated>
      </Grid>
    );
  }
  if (isError) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 100 }}
      >
        <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
          <Typography
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 48 }}
          >
            SPONSOR
          </Typography>
          <div style={{ paddingTop: 30 }}>
            <Alert severity="warning">Cannot load sponsor</Alert>
          </div>
        </Animated>
      </Grid>
    );
  }
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ paddingTop: 100 }}
      >
        <Box className="Sponsor">
          <Typography
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 48 }}
          >
            SPONSOR
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={0.1}
          >
            {data.data.map((item: any) => {
              console.log(item);
              return (
                <Grid item key={item.id}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link href={`${item.attributes.site}`}>
                      <a>
                        <Image
                          src={`${item.attributes.link}`}
                          width={140}
                          height={110}
                        />
                      </a>
                    </Link>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
      <Grid container justifyContent="center" style ={{paddingTop:100}}>
        <Box
          sx={{
            width: 700,
            height: 320,
            backgroundColor: "#270082",
            borderRadius: "40px",
            textAlign: "center",
            border: "1px solid white"
          }}
          
        >
          <Typography
            style={{ fontFamily: "aquirebold", color: "white", fontSize: 24, }}
          >
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUAE
            SEQUUNTUR IGITUR? SED HAEC NIHIL SANE AD REM; HOC LOCO TENERE SE
            TRIARIUS NON POTUIT. RATIONIS ENIM PERFECTIO EST VIRTUS; DUO REGES:
            CONSTRUCTIO INTERRETE. SINT MODO PARTES VITAE BEATAE.
          </Typography>
        </Box>
        <Grid item >
        <Image src ={require("../styles/img/flame-296.gif")} width={470} height={410} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sponsor;
