import type { NextPage } from "next";
import HeaderConnexion from "../components/header-connexion";
import RegistrationElevContainer from "../components/registration-elev-container1";
import Footer from "../components/footer";
import styles from "./s-inscrire-elev.module.css";

const SInscrireElev: NextPage = () => {

  return (
    <div className={styles.sinscrireelev}>
      <HeaderConnexion
        logotypeBackgroundColor="#2ec5ce"
      />
      <RegistrationElevContainer />
      <Footer />
    </div>
  );
};

export default SInscrireElev;
