import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Background from "../components/Background";
import Sponsor from "../components/Sponsor";
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Down from "../components/Down";
const Home: NextPage = ({ comments }: any) => {
  console.table(comments);
  return (
    <div className="all">
      <Navbar />
      <Welcome />
      <Sponsor />
      <Grid container justifyContent="center" direction="row" spacing={25}>
        {comments.map((comment: any) => {
          return (
            <Grid item key={comment.id}>
              <Card
                sx={{ minWidth: 345, minHeight: 435 }}
                className="CommentCard"
              >
                <CardContent>
                  <Grid
                    key={comment.id}
                    container
                    justifyContent="center"
                    style={{ paddingTop: 53 }}
                  >
                    <Avatar
                      src={comment.attributes.image}
                      sx={{ width: 105, height: 100 }}
                    />
                  </Grid>
                  <Grid container justifyContent="center" key={comment.id}>
                    <Typography
                      style={{ fontSize: 24, fontFamily: "aquirebold" }}
                    >
                      {comment.attributes.name}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="center" key={comment.id}>
                    <Typography
                      style={{ fontSize: 36, fontFamily: "aquirebold" }}
                    >
                      {comment.attributes.position}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="center" key={comment.id}>
                    <Typography
                      style={{ fontSize: 24, fontFamily: "aquirebold" }}
                    >
                      {comment.attributes.message}
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Grid container style={{ paddingTop: 100 }}>
        <Grid item className="mountain">
          <Image
            src={require("../styles/img/mountain.svg")}
            layout="responsive"
            width={1471}
           
          />
        </Grid>
      </Grid>

      <Background />
      <Down />
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query Getcomment {
        comments {
          data {
            attributes {
              name
              position
              image
              message
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      comments: data.comments.data,
    },
  };
}
