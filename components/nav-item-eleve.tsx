import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./nav-item-eleve.module.css";

const NavItemEleve1: NextPage = () => {
  const router = useRouter();

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/elev-donne-perso");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/elev-matiere");
  }, [router]);

  const onListeProfTextClick = useCallback(() => {
    router.push("/elev-liste-prof");
  }, [router]);

  return (
    <nav className={styles.navitems}>
      <div className={styles.donnesPerso} onClick={onDonnesPersoTextClick}>
        Donnes perso
      </div>
      <div className={styles.donnesPerso} onClick={onMatieresTextClick}>
        Matieres
      </div>
      <div className={styles.listeProf} onClick={onListeProfTextClick}>
        Liste prof
      </div>
    </nav>
  );
};

export default NavItemEleve1;
