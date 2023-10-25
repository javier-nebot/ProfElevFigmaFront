import type { NextPage } from "next";
import HeaderElev from "../components/header-elev";
import PersonalDataElevContainer from "../components/personal-data-elev-container";
import Footer from "../components/footer";
import styles from "./elev-donne-perso.module.css";

const ElevDonnePerso: NextPage = () => {
  return (
    <div className={styles.elevdonneperso}>
      <HeaderElev />
      <PersonalDataElevContainer />
      <Footer />
    </div>
  );
};

export default ElevDonnePerso;
