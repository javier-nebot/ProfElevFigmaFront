import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderConnexion from "../components/header-connexion";
import RegistrationElevContainer from "../components/registration-elev-container1";
import Footer from "../components/footer";
import styles from "./s-inscrire-elev.module.css";

const SInscrireElev: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.sinscrireelev}>
      <HeaderConnexion
        logotypeBackgroundColor="#2ec5ce"
        onRightNavClick={onRightNavClick}
      />
      <RegistrationElevContainer />
      <Footer />
    </div>
  );
};

export default SInscrireElev;
