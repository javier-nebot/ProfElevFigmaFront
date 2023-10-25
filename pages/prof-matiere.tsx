import type { NextPage } from "next";
import HeaderProf from "../components/header-prof";
import MatieresProfContainer from "../components/matieres-prof-container";
import Footer from "../components/footer";
import styles from "./prof-matiere.module.css";

const ProfMatiere: NextPage = () => {
  return (
    <div className={styles.profmatiere}>
      <HeaderProf />
      <MatieresProfContainer />
      <Footer />
    </div>
  );
};

export default ProfMatiere;
