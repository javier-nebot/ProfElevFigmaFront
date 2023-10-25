import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./nav-item-lp.module.css";

const NavItemLp: NextPage = () => {
  const onAccueilTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='accueilText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onAvantagesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='avantagesText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOpinionsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='opinionsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFonctionnementTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='fonctionnementText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCommencerTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='commencerText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className={styles.navitems}>
      <div
        className={styles.accueil}
        data-scroll-to="accueilText"
        onClick={onAccueilTextClick}
      >
        Acceuil
      </div>
      <div
        className={styles.accueil}
        data-scroll-to="avantagesText"
        onClick={onAvantagesTextClick}
      >
        Avantages
      </div>
      <div
        className={styles.accueil}
        data-scroll-to="opinionsText"
        onClick={onOpinionsTextClick}
      >
        Opinions
      </div>
      <div
        className={styles.accueil}
        data-scroll-to="fonctionnementText"
        onClick={onFonctionnementTextClick}
      >
        Comment ça marche?
      </div>
      <div
        className={styles.accueil}
        data-scroll-to="commencerText"
        onClick={onCommencerTextClick}
      >
        Commencer
      </div>
    </nav>
  );
};

export default NavItemLp;
