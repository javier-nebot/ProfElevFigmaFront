import type { NextPage } from "next";
import HeaderProf from "../components/header-prof";
import PersonalDataProfContainer from "../components/personal-data-prof-container";
import Footer from "../components/footer";
import styles from "./prof-donne-perso.module.css";

const ProfDonnePerso: NextPage = () => {

  return (
    <div className={styles.profdonneperso}>
      <HeaderProf />
      <PersonalDataProfContainer />
      <Footer />
    </div>
  );
};

export default ProfDonnePerso;
