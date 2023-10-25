import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LogoHeader from "./logo-header";
import styles from "./header-connexion.module.css";

type HeaderConnexionType = {
  /** Style props */
  logotypeBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onRightNavClick?: () => void;
};

const HeaderConnexion: NextPage<HeaderConnexionType> = ({
  logotypeBackgroundColor,
  onRightNavClick,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: logotypeBackgroundColor,
    };
  }, [logotypeBackgroundColor]);

  return (
    <header className={styles.header} style={headerStyle}>
      <div className={styles.logotype}>
        <LogoHeader />
      </div>
      <Button
        className={styles.rightnav}
        variant="primary"
        href="/landingpage"
        onClick={onRightNavClick}
      >
        Accueil
      </Button>
    </header>
  );
};

export default HeaderConnexion;
