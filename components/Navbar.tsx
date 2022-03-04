import React from "react";
import { Nav, Header, Box, Avatar } from "grommet";
import Button from "@mui/material/Button";
import Link from "next/link";
import { fontFamily } from "@mui/system";
function Navbar(props: any) {
  return (
    <div>
      <Header background="brand" pad="small">
        <Avatar src={props.avatar} />
        <Box direction="row" gap="large" align="center" justify="between">
        <Button style={{ fontFamily: "aquirebold", color: "white",fontSize: 24}}>
            Home
          </Button>
          <Button style={{ fontFamily: "aquirebold", color: "white",fontSize: 24 }}>
            Explore
          </Button>
        </Box>


        <Nav direction="row">
          

          <Button
            variant="contained"
            style={{
              backgroundColor: "#610094",
              borderRadius: "39% 61% 50% 50% / 63% 21% 79% 37% ",
              width: "112px",
              height: "62px",
              fontFamily: "Short Stack, cursive",
              color: "#fff",
            }}
          >
            LOGIN
          </Button>
        </Nav>
      </Header>
    </div>
  );
}

export default Navbar;
Navbar.defaultProps = {
  avatar: "https://c.tenor.com/odIQCrOI1bcAAAAM/byg-blackeyegalaxy.gif",
};
