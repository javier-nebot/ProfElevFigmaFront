import type { NextPage } from "next";
import HeaderElev1 from "../components/header-elev1";
import ElevListProfContainer from "../components/elev-list-prof-container";
import Footer from "../components/footer";
import styles from "./elev-liste-prof.module.css";

const ElevListeProf: NextPage = () => {
  return (
    <div className={styles.elevlisteprof}>
      <HeaderElev1 />
      <ElevListProfContainer />
      <Footer />
    </div>
  );
};

export default ElevListeProf;
