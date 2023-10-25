import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./connexion-elev-container.module.css";

const ConnexionElevContainer: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/s-inscrire-elev");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/elev-donne-perso");
  }, [router]);

  return (
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
  );
};

export default ConnexionElevContainer;
