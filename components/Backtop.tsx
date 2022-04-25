import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Back from "../styles/img/Back.svg";
function Backtop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {backToTop && (
        <IconButton
          onClick={scrollTop}
          sx={{
            position: "fixed",
            bottom: "15%",
            left: "95%",
            transform: "rotate(90deg)",
          }}
        >
          <Image src={Back} width={30} height={30} />
        </IconButton>
      )}
    </div>
  );
}

export default Backtop;
