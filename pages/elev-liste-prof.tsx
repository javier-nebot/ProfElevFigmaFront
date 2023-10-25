import type { NextPage } from "next";
import HeaderElev1 from "../components/header-elev1";
import LogoFooter from "../components/logo-footer";
import styles from "./elev-liste-prof.module.css";

const ElevListeProf: NextPage = () => {
  return (
    <div className={styles.elevlisteprof}>
      <HeaderElev1 />
      <div className={styles.listeProfsParent}>
        <h1 className={styles.listeProfs}>Liste Prof’s</h1>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Prenom</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Nom</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Diplome</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Telephone</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Email</div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.logotypeDark}>
          <LogoFooter />
        </div>
        <div className={styles.profelevTousLes}>
          © 2023 ProfELev. Tous les droits réservés
        </div>
        <div className={styles.socialLinks}>
          <img className={styles.socialIcons} alt="" src="/socialicons.svg" />
          <img className={styles.socialIcons} alt="" src="/socialicons1.svg" />
        </div>
      </footer>
    </div>
  );
};

export default ElevListeProf;
