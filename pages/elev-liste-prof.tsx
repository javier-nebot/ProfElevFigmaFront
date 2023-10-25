import type { NextPage } from "next";
import HeaderElev from "../components/header-elev";
import ElevListProfContainer from "../components/elev-list-prof-container";
import Footer from "../components/footer";
import styles from "./elev-liste-prof.module.css";

const ElevListeProf: NextPage = () => {
  return (
    <div className={styles.elevlisteprof}>
      <HeaderElev />
      <ElevListProfContainer />
      <Footer />
    </div>
  );
};

export default ElevListeProf;
