import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderElev from "../components/header-elev";
import MatiereElevContainer from "../components/matiere-elev-container";
import LogoFooter from "../components/logo-footer";
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
      <footer className={styles.footer}>
        <div className={styles.logotype}>
          <LogoFooter />
        </div>
        <div className={styles.profelevTousLes}>
          © 2023 ProfELev. Tous les droits réservés
        </div>
        <div className={styles.sociallinks}>
          <img className={styles.socialicons} alt="" src="/socialicons.svg" />
          <img className={styles.socialicons} alt="" src="/socialicons1.svg" />
        </div>
      </footer>
    </div>
  );
};

export default ElevMatiere;
