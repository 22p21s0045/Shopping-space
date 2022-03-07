import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
function Sponsor({res} : any) {
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
export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/api/sponsors/", {
    headers: {
      authorization:
        "d80d84120d999fc98b951e5b805d9f2c6011122efce17eba85568cc46e8a0b8753d45b2f3808e29788ea324651b0704b9bd335cb0a7f09dafe87e14416043d5438f6b51f0143799ae87685ad84a80fd06221905d8175ee930386ab12115a43f8d8513f6cf4589b95fd29f1271f7f7f8cf225e706b03572791ba3fb2701bf008f",
    },
  });
  return {
    props: {
      res,
    },
  };
}
