import type { NextPage } from "next";
import HeaderConnexion from "../components/header-connexion";
import RegistrationProfContainer from "../components/registration-prof-container";
import Footer from "../components/footer";
import styles from "./s-inscrire-prof.module.css";

const SInscrireProf: NextPage = () => {

  return (
    <div className={styles.sinscrireprof}>
      <HeaderConnexion
        logotypeBackgroundColor="#fe9a22"
      />
      <RegistrationProfContainer />
      <Footer />
    </div>
  );
};

export default SInscrireProf;
