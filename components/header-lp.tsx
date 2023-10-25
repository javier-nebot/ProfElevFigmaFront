import type { NextPage } from "next";
import LogoHeader from "./logo-header";
import NavItemLp from "./nav-item-lp";
import styles from "./header-lp.module.css";

const HeaderLp: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logotype}>
        <LogoHeader />
      </div>
      <NavItemLp />
    </header>
  );
};

export default HeaderLp;
