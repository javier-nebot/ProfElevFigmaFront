import type { NextPage } from "next";
import LogoFooter from "./logo-footer";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
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
  );
};

export default Footer;
