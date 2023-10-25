import type { NextPage } from "next";
import HeaderElev from "../components/header-elev";
import MatiereElevContainer from "../components/matiere-elev-container";
import Footer from "../components/footer";
import styles from "./elev-matiere.module.css";

const ElevMatiere: NextPage = () => {
  return (
    <div className={styles.elevmatiere}>
      <HeaderElev />
      <MatiereElevContainer />
      <Footer />
    </div>
  );
};

export default ElevMatiere;
