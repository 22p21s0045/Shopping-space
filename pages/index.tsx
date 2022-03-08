import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Background from "../components/Background";
import Sponsor from "../components/Sponsor";
import axios from "axios";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Sponsor />
      <Background />
    </div>
  );
};

export default Home;
