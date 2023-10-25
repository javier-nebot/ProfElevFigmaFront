import type { NextPage } from "next";
import HeaderLp from "../components/header-lp";
import Container01Lp from "../components/container01-lp";
import Container02Lp from "../components/container02-lp";
import Container03Lp from "../components/container03-lp";
import Container04Lp from "../components/container04-lp";
import Container05Lp from "../components/container05-lp";
import LogoFooter from "../components/logo-footer";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingpage}>
      <HeaderLp />
      <Container01Lp />
      <Container02Lp />
      <Container03Lp />
      <Container04Lp />
      <Container05Lp />
      <footer className={styles.footerex}>
        <div className={styles.logotype}>
          <LogoFooter />
        </div>
        <div className={styles.profelevTousLes}>
          © 2023 ProfELev. Tous les droits réservés
        </div>
        <div className={styles.sociallinks}>
          <img className={styles.socialicons} alt="" src="/socialicons.svg" />
          <img className={styles.socialicons} alt="" src="/socialicons1.svg" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
