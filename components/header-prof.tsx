import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import LogoHeader from "./logo-header";
import NavItemProf from "./nav-item-prof";
import styles from "./header-prof.module.css";

type HeaderProfType = {
  /** Style props */
  headerOverflow?: CSSProperties["overflow"];

  /** Action props */
  onRightNavClick?: () => void;
};

const HeaderProf: NextPage<HeaderProfType> = ({
  onRightNavClick,
  headerOverflow,
}) => {
  const header1Style: CSSProperties = useMemo(() => {
    return {
      overflow: headerOverflow,
    };
  }, [headerOverflow]);

  const router = useRouter();

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/prof-matiere");
  }, [router]);

  return (
    <header className={styles.header} style={header1Style}>
      <div className={styles.logotype}>
        <LogoHeader />
      </div>
      <NavItemProf
        onDonnesPersoTextClick={onDonnesPersoTextClick}
        onMatieresTextClick={onMatieresTextClick}
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

export default HeaderProf;
