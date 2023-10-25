import type { NextPage } from "next";
import HeaderLp from "../components/header-lp";
import Container01Lp from "../components/container01-lp";
import Container02Lp from "../components/container02-lp";
import Container03Lp from "../components/container03-lp";
import Container04Lp from "../components/container04-lp";
import Container05Lp from "../components/container05-lp";
import styles from "./index.module.css";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingpage}>
      <HeaderLp />
      <Container01Lp />
      <Container02Lp />
      <Container03Lp />
      <Container04Lp />
      <Container05Lp />
      <Footer />
    </div>
  );
};

export default LandingPage;
