import React from 'react'
import Navbar from '../../components/Navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {GetStaticProps} from 'next'
interface Props {
  name: string;
  path: string;
}
function index(menus:Props) {
  //FIXME: height 100
  console.log(menus)
  return (
    <div>
      <Navbar />
      
      <Grid container sx ={{height:"100%"}}   >
        <Grid item xs ={2} md={2} lg={1} >
          <Box sx={{backgroundColor: '#000',height:'100%',paddingTop:6}} alignItems='center' justifyItems ='center' textAlign='center'>
            <Avatar variant='rounded' sx={{margin:'auto'}}/>
            
            <Button sx ={{fontFamily: "aquirebold",width:'100%'}}>
              dff
            </Button>
            
            

          </Box>
        </Grid>
      </Grid>
      </div>
  )
}

export default index
export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
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
    `
  });
  return {
    props: {
      menus: data.menus
    }
  };
}