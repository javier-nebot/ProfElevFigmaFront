import type { NextPage } from "next";
import HeaderConnexion from "../components/header-connexion";
import ConnexionElevContainer from "../components/connexion-elev-container";
import Footer from "../components/footer";
import styles from "./se-connecter-elev.module.css";

const SeConnecterElev: NextPage = () => {
  return (
    <div className={styles.seconnecterelev}>
      <HeaderConnexion
        logotypeBackgroundColor="#2ec5ce" />
      <ConnexionElevContainer />
      <Footer />
    </div>
  );
};

export default SeConnecterElev;
