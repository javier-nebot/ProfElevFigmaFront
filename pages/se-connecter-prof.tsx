import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderConnexion from "../components/header-connexion";
import ConnexionContainer from "../components/connexion-container";
import Footer from "../components/footer";
import styles from "./se-connecter-prof.module.css";

const SeConnecterProf: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/s-inscrire-prof");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  return (
    <div className={styles.seconnecterprof}>
      <HeaderConnexion onRightNavClick={onRightNavClick} />
      <ConnexionContainer
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
      />
      <Footer />
    </div>
  );
};

export default SeConnecterProf;
