import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import LogoHeader from "./logo-header";
import NavItemProf from "./nav-item-prof";
import styles from "./header-prof.module.css";

const HeaderProf: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header className={styles.header}>
      <div className={styles.logotype}>
        <LogoHeader />
      </div>
      <NavItemProf />
      <Button
        className={styles.rightnav}
        variant="primary"
        href="/"
        onClick={onRightNavClick}
      >
        Se déconnecter
      </Button>
    </header>
  );
};

export default HeaderProf;
