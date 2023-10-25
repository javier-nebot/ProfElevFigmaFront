import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderElev from "../components/header-elev";
import PersonalDataElevContainer from "../components/personal-data-elev-container";
import LogoFooter from "../components/logo-footer";
import styles from "./elev-donne-perso.module.css";

const ElevDonnePerso: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/elev-matiere");
  }, [router]);

  const onListeProfTextClick = useCallback(() => {
    router.push("/elev-liste-prof");
  }, [router]);

  return (
    <div className={styles.elevdonneperso}>
      <HeaderElev onRightNavClick={onRightNavClick} />
      <PersonalDataElevContainer />
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

export default ElevDonnePerso;
