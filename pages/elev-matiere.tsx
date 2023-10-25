import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderElev from "../components/header-elev";
import MatiereElevContainer from "../components/matiere-elev-container";
import Footer from "../components/footer";
import styles from "./elev-matiere.module.css";

const ElevMatiere: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/elev-donne-perso");
  }, [router]);

  const onListeProfTextClick = useCallback(() => {
    router.push("/elev-liste-prof");
  }, [router]);

  return (
    <div className={styles.elevmatiere}>
      <HeaderElev onRightNavClick={onRightNavClick} />
      <MatiereElevContainer />
      <Footer />
    </div>
  );
};

export default ElevMatiere;
