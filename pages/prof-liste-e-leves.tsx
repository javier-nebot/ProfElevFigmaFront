import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderProf from "../components/header-prof";
import LogoFooter from "../components/logo-footer";
import styles from "./prof-liste-e-leves.module.css";

const ProfListeELeves: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/prof-matiere");
  }, [router]);

  return (
    <div className={styles.proflisteeleves}>
      <HeaderProf onRightNavClick={onRightNavClick} />
      <div className={styles.frame}>
        <h1 className={styles.listeElevs}>Liste elev’s</h1>
        <div className={styles.labelParent}>
          <div className={styles.label}>
            <div className={styles.prenomtuteur}>PrenomTuteur</div>
          </div>
          <div className={styles.input}>
            <div className={styles.label1}>
              <div className={styles.prenomtuteur}>NomTuteur</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label1}>
              <div className={styles.prenomtuteur}>NomEleve</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label1}>
              <div className={styles.prenomtuteur}>Matiere</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label1}>
              <div className={styles.prenomtuteur}>Telephone</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label1}>
              <div className={styles.prenomtuteur}>Email</div>
            </div>
          </div>
        </div>
      </div>
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

export default ProfListeELeves;
