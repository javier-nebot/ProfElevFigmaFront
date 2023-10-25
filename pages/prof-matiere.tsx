import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderProf from "../components/header-prof";
import MatieresProfContainer from "../components/matieres-prof-container";
import LogoFooter from "../components/logo-footer";
import styles from "./prof-matiere.module.css";

const ProfMatiere: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  const onListeElevTextClick = useCallback(() => {
    router.push("/prof-liste-e-leves");
  }, [router]);

  return (
    <div className={styles.profmatiere}>
      <HeaderProf onRightNavClick={onRightNavClick} headerOverflow="hidden" />
      <MatieresProfContainer />
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

export default ProfMatiere;
