import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderProf from "../components/header-prof";
import ProfListElevContainer from "../components/prof-list-elev-container";
import Footer from "../components/footer";
import styles from "./prof-liste-e-leves.module.css";

const ProfListeELeves: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.proflisteeleves}>
      <HeaderProf />
      <ProfListElevContainer />
      <Footer />
    </div>
  );
};

export default ProfListeELeves;
