import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LogoHeader from "./logo-header";
import NavItemEleve1 from "./nav-item-eleve1";
import { useRouter } from "next/router";
import styles from "./header-elev1.module.css";

const HeaderElev1: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header className={styles.header}>
      <div className={styles.logotype}>
        <LogoHeader />
      </div>
      <NavItemEleve1 />
      <Button
        className={styles.rightNav}
        variant="primary"
        href="/landingpage"
        onClick={onRightNavClick}
      >
        Se déconnecter
      </Button>
    </header>
  );
};

export default HeaderElev1;
