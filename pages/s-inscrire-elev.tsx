import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderConnexion from "../components/header-connexion";
import RegistrationElevContainer1 from "../components/registration-elev-container1";
import LogoFooter from "../components/logo-footer";
import styles from "./s-inscrire-elev.module.css";

const SInscrireElev: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.sinscrireelev}>
      <HeaderConnexion
        logotypeBackgroundColor="#2ec5ce"
        onRightNavClick={onRightNavClick}
      />
      <RegistrationElevContainer1 />
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

export default SInscrireElev;
