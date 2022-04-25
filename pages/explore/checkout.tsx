import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/Reducer";
import { RootState } from "../../redux/Store";
import Decrement from "../../styles/img/checkout/Decrement.svg";
import Increment from "../../styles/img/checkout/Increment.svg";
function checkout() {
  const lists = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <Navbar />
      <div className="circleBg">
        <Image src={require("../../styles/img/checkout/Circle1.svg")} />
      </div>
      <div className="circleBg2">
        <Image
          src={require("../../styles/img/checkout/Circle2.svg")}
          width={595}
          height={600}
        />
      </div>
      <Grid
        container
        sx={{ height: "100%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6} lg={5}>
          <Paper sx={{ marginTop: 10 }}>
            {lists.products.map((item): any => {
              return (
                <Stack
                  spacing={12}
                  direction="row"
                  alignContent="center"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      justifyContent: "flex-start",
                      marginLeft: 5,
                      marginTop: 5,
                      position: "relative",
                      textAlign: "center",
                      border: `1px solid black`,
                    }}
                  >
                    {item.attributes.name}
                  </Box>
                  <Box
                    sx={{
                      paddingRight: "20%",
                      position: "relative",
                      marginTop: 10,
                    }}
                  >
                    <IconButton>
                      <Image src={Decrement} />
                    </IconButton>
                    {item.quantity}
                    <IconButton>
                      <Image src={Increment} />
                    </IconButton>
                  </Box>
                </Stack>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default checkout;
