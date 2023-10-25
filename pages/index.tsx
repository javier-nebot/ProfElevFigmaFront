import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import HeaderLp from "../components/header-lp";
import Container01Lp from "../components/container01-lp";
import Container03Lp from "../components/container03-lp";
import Container04Lp from "../components/container04-lp";
import { useRouter } from "next/router";
import LogoFooter from "../components/logo-footer";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/se-connecter-elev");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/se-connecter-prof");
  }, [router]);

  return (
    <div className={styles.landingpage}>
      <HeaderLp />
      <Container01Lp />
      <section className={styles.avantages} id="02Avantages">
        <div className={styles.titreh2Parent}>
          <h1 className={styles.titreh2}>Avantages</h1>
          <img className={styles.creativeIcon} alt="" src="/creative@2x.png" />
          <div className={styles.text}>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </div>
          </div>
        </div>
      </section>
      <Container03Lp />
      <Container04Lp />
      <section className={styles.commencer}>
        <h1 className={styles.titreh21}>Commencer</h1>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            variant="primary"
            href="/seconnecterelev"
            onClick={onButtonClick}
          >
            Elev
          </Button>
          <Button
            className={styles.button}
            variant="primary"
            href="/seconnecterprof"
            onClick={onButton1Click}
          >
            Prof
          </Button>
        </div>
      </section>
      <footer className={styles.footerex}>
        <div className={styles.logotype}>
          <LogoFooter />
        </div>
        <div className={styles.profelevTousLes}>
          © 2023 ProfELev. Tous les droits réservés
        </div>
        <div className={styles.sociallinks}>
          <img className={styles.socialicons} alt="" src="/socialicons.svg" />
          <img className={styles.socialicons} alt="" src="/socialicons1.svg" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
