import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import {useState,useEffect} from "react"
function id() {
  const router = useRouter();
  const [state, setState] = useState({});
  const { id } = router.query;
  const product = useSelector((state: RootState) =>
    state.counter.products.find((p: { id: any }) => p.id == id)
  );
  
useEffect(() => {
  product.attributes.coverimage.data.map((item: { attributes: { url: string; }; }) =>setState({...state,original: item.attributes.url }));
},[])
  console.log(state)
  return (
    <div>
      <Navbar />  

      <Grid container>
        <Grid item>

        </Grid>
        <h1>This pag is ID:{id}</h1>
      </Grid>
    </div>
  );
}

export default id;
