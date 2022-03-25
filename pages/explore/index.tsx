import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
function index({ menus, tags, products }: any) {
  //FIXME: height 100
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
              (item: { attributes: { name: string; path: string } }) => {
                return (
                  <Link href={item.attributes.path}>
                    <Button
                      sx={{
                        fontFamily: "aquirebold",
                        width: "100%",
                        color: "white",
                      }}
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
              {tags.map((item: { attributes: { nametag: string } }) => {
                return (
                  <Grid item xs={3} lg={1}>
                    <Button>{item.attributes.nametag}</Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ backgroundColor: "red", marginTop: 5, marginLeft: 5 }}
          >
            {products.map((item: any) => {
              return (
                <Grid item lg ={3} md ={6}>
                  <Card >
                    <CardMedia
                    component="img"
                      image={`${process.env.NEXT_PUBLIC_URL}${item.attributes.image.data.attributes.url}`}
                      sx={{
                        width: 224,
                        height: 240,
                        position: "relative",
                        left: "15%",
                        marginTop: 5,
                      }}
                    />
                    <CardContent>
                      <h1>{item.attributes.name}</h1>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
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
            attributes {
              name
              path
            }
          }
        }
        tags {
          data {
            attributes {
              nametag
            }
          }
        }
        products {
          data {
            attributes {
              description
              name
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
