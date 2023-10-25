import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import styles from "./nav-item-prof.module.css";
import { useRouter } from "next/router";

const NavItemProf: NextPage = () => {
  const router = useRouter();

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/prof-matiere");
  }, [router]);

  const onListeElevTextClick = useCallback(() => {
    router.push("/prof-liste-e-leves");
  }, [router]);

  return (
    <div className={styles.navitems}>
      <div className={styles.donnesPerso} onClick={onDonnesPersoTextClick}>
        Donnes perso
      </div>
      <div className={styles.donnesPerso} onClick={onMatieresTextClick}>
        Matieres
      </div>
      <div className={styles.listeElev} onClick={onListeElevTextClick}>
        Liste Elev
      </div>
    </div>
  );
};

export default NavItemProf;
