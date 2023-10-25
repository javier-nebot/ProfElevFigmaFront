import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import HeaderConnexion from "../components/header-connexion";
import LogoFooter from "../components/logo-footer";
import styles from "./se-connecter-elev.module.css";

const SeConnecterElev: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/s-inscrire-elev");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/elev-donne-perso");
  }, [router]);

  return (
    <div className={styles.seconnecterelev}>
      <HeaderConnexion
        logotypeBackgroundColor="#2ec5ce"
        onRightNavClick={onRightNavClick}
      />
      <div className={styles.frame}>
        <div className={styles.text}>
          <h1 className={styles.seConnecter}>Se connecter</h1>
          <div
            className={styles.vousNavezPas}
          >{`Vous n’avez pas un compte? `}</div>
        </div>
        <Button
          className={styles.button}
          variant="primary"
          href="/sinscrireelev"
          onClick={onButtonClick}
        >
          S’inscrire
        </Button>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.email}>Email</div>
          </div>
          <Form className={styles.textfield}>
            <Form.Control type="text" name="Email" />
          </Form>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.email}>Password</div>
          </div>
          <Form className={styles.textfield}>
            <Form.Control type="text" name="Password" />
          </Form>
        </div>
        <Button
          className={styles.button1}
          variant="primary"
          href="/elevdonneperso"
          onClick={onButton1Click}
        >
          Se Connecter
        </Button>
      </div>
      <footer className={styles.footer}>
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

export default SeConnecterElev;