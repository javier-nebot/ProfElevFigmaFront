import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import LogoHeader from "./logo-header";
import NavItemElev from "./nav-item-elev";
import styles from "./header-elev.module.css";

type HeaderElevType = {
  /** Action props */
  onRightNavClick?: () => void;
};

const HeaderElev: NextPage<HeaderElevType> = ({ onRightNavClick }) => {
  const router = useRouter();

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/elev-donne-perso");
  }, [router]);

  const onListeProfTextClick = useCallback(() => {
    router.push("/elev-liste-prof");
  }, [router]);

  return (
    <header className={styles.header}>
      <div className={styles.logotype}>
        <LogoHeader />
      </div>
      <NavItemElev
        onDonnesPersoTextClick={onDonnesPersoTextClick}
        onListeProfTextClick={onListeProfTextClick}
      />
      <Button
        className={styles.rightnav}
        variant="primary"
        href="/landingpage"
        onClick={onRightNavClick}
      >
        Se déconnecter
      </Button>
    </header>
  );
};

export default HeaderElev;
