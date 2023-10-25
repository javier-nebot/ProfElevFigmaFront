import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./nav-item-prof.module.css";

type NavItemProfType = {
  /** Style props */
  donnesPersoCursor?: CSSProperties["cursor"];
  matieresCursor?: CSSProperties["cursor"];
  listeElevCursor?: CSSProperties["cursor"];

  /** Action props */
  onDonnesPersoTextClick?: () => void;
  onMatieresTextClick?: () => void;
  onListeElevTextClick?: () => void;
};

const NavItemProf: NextPage<NavItemProfType> = ({
  onDonnesPersoTextClick,
  donnesPersoCursor,
  onMatieresTextClick,
  matieresCursor,
  onListeElevTextClick,
  listeElevCursor,
}) => {
  const donnesPersoStyle: CSSProperties = useMemo(() => {
    return {
      cursor: donnesPersoCursor,
    };
  }, [donnesPersoCursor]);

  const matieresStyle: CSSProperties = useMemo(() => {
    return {
      cursor: matieresCursor,
    };
  }, [matieresCursor]);

  const listeElevStyle: CSSProperties = useMemo(() => {
    return {
      cursor: listeElevCursor,
    };
  }, [listeElevCursor]);

  return (
    <div className={styles.navitems}>
      <div
        className={styles.donnesPerso}
        onClick={onDonnesPersoTextClick}
        style={donnesPersoStyle}
      >
        Donnes perso
      </div>
      <div
        className={styles.donnesPerso}
        onClick={onMatieresTextClick}
        style={matieresStyle}
      >
        Matieres
      </div>
      <div
        className={styles.listeElev}
        onClick={onListeElevTextClick}
        style={listeElevStyle}
      >
        Liste Elev
      </div>
    </div>
  );
};

export default NavItemProf;
