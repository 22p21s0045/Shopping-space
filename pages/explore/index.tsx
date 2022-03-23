import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Link from "next/link";
function index({ menus }: any) {
  //FIXME: height 100

  return (
    <div>
      <Navbar />

      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={2} md={2} lg={1}>
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
          sx={{ paddingLeft: 3,paddingTop:3 }}
        >
          <Box
            sx={{
              backgroundColor: "#000",
              width: "100%",
              height: "20%",
              borderRadius: 5,
            }}
          >
            <Box sx={{ backgroundColor: "#999", width: "33%", height: 33 }}>
              dfffd
            </Box>
          </Box>
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
      }
    `,
  });
  return {
    props: {
      menus: data.menus.data,
    },
  };
};
