import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./nav-item-lp.module.css";

const NavItemLp: NextPage = () => {
  const onAccueilTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='accueil']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAvantagesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='avantages']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOpinionsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='opinion']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFonctionnementTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='comntMarche']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCommencerTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='commencer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className={styles.navitems}>
      <div className={styles.accueil} onClick={onAccueilTextClick}>
        Acceuil
      </div>
      <div className={styles.avantages} onClick={onAvantagesTextClick}>
        Avantages
      </div>
      <div className={styles.accueil} onClick={onOpinionsTextClick}>
        Opinions
      </div>
      <div className={styles.accueil} onClick={onFonctionnementTextClick}>
        Comment ça marche?
      </div>
      <div className={styles.accueil} onClick={onCommencerTextClick}>
        Commencer
      </div>
    </nav>
  );
};

export default NavItemLp;
