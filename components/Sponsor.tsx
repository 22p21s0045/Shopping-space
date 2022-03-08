import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from 'react-query'
import {useEffect} from 'react'
import axios from "axios";

function Sponsor() {
   const fetchSponsor = async () => {
    const get = await axios.get("http://localhost:1337/api/sponsors/",{headers: {"Authorization" : `Bearer ${"54d7d3bc628a23e27006f902f3a4d249306ef1dbdd0757356c224b7da18bda92f3c58af9230ffe97478f1ec4f06afa4d58f43d0074743af05d28056e7fb15878334af0aa8af4af08233e77a1fab244188c04b3d4cfdd359b9d7e3b48a5348767fb73fcdc78fa0bf65e661988fb19b56cc509b5c6ac4eade569d48b0d335f8b9d"}`}});
    console.log(get)
   }
   const { isLoading, isError, data, error } = useQuery('sponsor',fetchSponsor)
   if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error :(</p>;
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
        </Box>
      </Grid>
    </div>
  );
}

export default Sponsor;
