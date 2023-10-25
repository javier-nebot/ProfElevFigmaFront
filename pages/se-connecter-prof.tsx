import type { NextPage } from "next";
import HeaderConnexion from "../components/header-connexion";
import ConnexionProfContainer from "../components/connexion-prof-container";
import Footer from "../components/footer";
import styles from "./se-connecter-prof.module.css";

const SeConnecterProf: NextPage = () => {
  return (
    <div className={styles.seconnecterprof}>
      <HeaderConnexion />
      <ConnexionProfContainer />
      <Footer />
    </div>
  );
};

export default SeConnecterProf;
