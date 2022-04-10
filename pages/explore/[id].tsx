import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

interface State {
  original: string;
}
const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.up("md")]: {
    position: "relative",
    
    paddingLeft: 100,
  },
  
}));
function id() {
  const router = useRouter();
  const [state, setState] = useState([]);
  const { id } = router.query;
  const product = useSelector((state: RootState) =>
    state.counter.products.find((p: { id: any }) => p.id == id)
  );

  useEffect(() => {
    product.attributes.coverimage.data.map(
      (item: { attributes: { url: string } }) =>
        setState(
          //FIXME:ANY type
          (oldstate): any => [
            ...oldstate,
            {
              original: `${process.env.NEXT_PUBLIC_URL}${item.attributes.url}`,
              thumbnail: `${process.env.NEXT_PUBLIC_URL}${item.attributes.url}`,
            },
          ]
        )
    );
  }, []);
  console.log(state);
  return (
    <div>
      <Navbar />

      <Grid container sx={{ marginTop: 5 }}>
       <Root>
        <Grid item lg={6} md={12} xs={12}>
          <ImageGallery items={state} autoPlay={true} showPlayButton={false} />
        </Grid>
        </Root>
        <Grid item lg={6} md={12} xs={12} sx ={{marginLeft:10}}>
          <h1>{product.attributes.name}</h1>
         
          <h1 style ={{marginLeft:"40%"}}>{product.attributes.price} บาท</h1>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
          <p>{product.attributes.description}</p>
          </Grid>
      </Grid>
    </div>
  );
}

export default id;
