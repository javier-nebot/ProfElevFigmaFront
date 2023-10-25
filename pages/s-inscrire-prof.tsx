import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderConnexion from "../components/header-connexion";
import RegistrationProfContainer from "../components/registration-prof-container";
import Footer from "../components/footer";
import styles from "./s-inscrire-prof.module.css";

const SInscrireProf: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.sinscrireprof}>
      <HeaderConnexion
        logotypeBackgroundColor="#fe9a22"
        onRightNavClick={onRightNavClick}
      />
      <RegistrationProfContainer />
      <Footer />
    </div>
  );
};

export default SInscrireProf;
