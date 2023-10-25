import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./nav-item-elev.module.css";

type NavItemElevType = {
  /** Style props */
  donnesPersoCursor?: CSSProperties["cursor"];
  matieresCursor?: CSSProperties["cursor"];

  /** Action props */
  onDonnesPersoTextClick?: () => void;
  onMatieresTextClick?: () => void;
  onListeProfTextClick?: () => void;
};

const NavItemElev: NextPage<NavItemElevType> = ({
  onDonnesPersoTextClick,
  donnesPersoCursor,
  onMatieresTextClick,
  matieresCursor,
  onListeProfTextClick,
}) => {
  const donnesPerso1Style: CSSProperties = useMemo(() => {
    return {
      cursor: donnesPersoCursor,
    };
  }, [donnesPersoCursor]);

  const matieres1Style: CSSProperties = useMemo(() => {
    return {
      cursor: matieresCursor,
    };
  }, [matieresCursor]);

  return (
    <div className={styles.navItems}>
      <div
        className={styles.donnesPerso}
        onClick={onDonnesPersoTextClick}
        style={donnesPerso1Style}
      >
        Donnes perso
      </div>
      <div
        className={styles.matieres}
        onClick={onMatieresTextClick}
        style={matieres1Style}
      >
        Matieres
      </div>
      <div className={styles.donnesPerso} onClick={onListeProfTextClick}>
        Liste Prof
      </div>
    </div>
  );
};

export default NavItemElev;
