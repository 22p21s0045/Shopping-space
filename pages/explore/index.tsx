import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Carts from "../../styles/img/Carts.svg";
import Background from "../../components/Background";
import IconButton from "@mui/material/IconButton";
import BackTop from "../../components/Backtop";
import Backtop from "../../components/Backtop";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import {increment,decrement} from '../../redux/Reducer'
import {useDispatch,useSelector} from "react-redux";
import {RootState} from "../../redux/Store";
function index({ menus, tags, products }: any) {
  //FIXME: height 100
  const dispatch = useDispatch()
  const basket:number = useSelector((state:RootState)=>state.counter.basket);
  console.log(products);
  return (
    <div>
      <Navbar />

      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={2} md={1} lg={1}>
          <Box
            sx={{ backgroundColor: "#000", height: "100%", paddingTop: 6 }}
            alignItems="center"
            justifyItems="center"
            textAlign="center"
          >
            <Avatar variant="rounded" sx={{ margin: "auto" }} />
            {menus.map(
              (item: {
                id: number;
                attributes: { name: string; path: string; id: number };
              }) => {
                return (
                  <Link href={item.attributes.path} key={item.id}>
                    <Button
                      sx={{
                        fontFamily: "aquirebold",
                        width: "100%",
                        color: "white",
                      }}
                      key={item.id}
                    >
                      {item.attributes.name}
                    </Button>
                  </Link>
                );
              }
            )}
          </Box>
        </Grid>
        <Grid
          container
          xs={9}
          md={9}
          lg={9}
          justifyContent="center"
          sx={{ paddingLeft: 3, paddingTop: 3 }}
        >
          <Box
            sx={{
              backgroundColor: "#E2C3C3",
              width: "100%",
              height: "30%",
              borderRadius: 5,
              maxHeight: 50,
            }}
          >
            <Grid
              container
              justifyContent="center"
              spacing={4}
              alignItems="center"
              sx={{ paddingTop: 1.5 }}
            >
              {tags.map(
                (item: { id: number; attributes: { nametag: string } }) => {
                  return (
                    <Grid item xs={3} lg={1}>
                      <Button>{item.attributes.nametag}</Button>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ marginTop: 5, marginLeft: 2 }}
          >
            {products.map((item: any) => {
              return (
                <Grid item lg={3.5} md={6} xs={12} key={item.id}>
                  <Card className="Card">
                    <CardMedia
                      component="img"
                      image={`${process.env.NEXT_PUBLIC_URL}${item.attributes.image.data.attributes.url}`}
                      sx={{
                        width: 224,
                        height: 240,
                        position: "relative",
                        left: "15%",
                        marginTop: 5,
                        borderRadius: 5,
                      }}
                    />
                    <CardContent>
                      <h1>{item.attributes.name}</h1>
                      <Typography>{item.attributes.description}</Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          paddingTop: 5,
                          fontSize: 26,
                        }}
                      >
                        {item.attributes.price}
                      </Typography>
                      <div className="ButtonBuy">
                        <Button
                          sx={{
                            backgroundColor: "#7ECA9C",
                            border: `1px solid black`,
                            fontFamily: "Abhaya Libre",
                            fontWeight: "bold",
                            color: "black",
                            ":hover": {
                              bgcolor: "primary.main", // theme.palette.primary.main
                              color: "white",
                            },
                          }}
                          onClick ={()=>dispatch(increment())}
                        >
                          ADDCART
                        </Button>
                        <Button
                          sx={{
                            backgroundColor: "#A7BBC7",
                            border: `1px solid black`,
                            fontFamily: "Abhaya Libre",
                            fontWeight: "bold",
                            color: "black",
                            marginLeft: 1,
                            ":hover": {
                              bgcolor: "primary.main", // theme.palette.primary.main
                              color: "white",
                            },
                          }}
                        >
                          BUYNOW
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <IconButton className="Carts">
        <Image src={Carts} />
        <h5>{basket}</h5>
      </IconButton>
      <Backtop />
      <Background color="#FFE6E6" />
    </div>
  );
}

export default index;
export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query Getmenu {
        menus {
          data {
            id
            attributes {
              name
              path
            }
          }
        }
        tags {
          data {
            id
            attributes {
              nametag
            }
          }
        }
        products {
          data {
            id
            attributes {
              description
              name
              price
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      menus: data.menus.data,
      tags: data.tags.data,
      products: data.products.data,
    },
  };
};
