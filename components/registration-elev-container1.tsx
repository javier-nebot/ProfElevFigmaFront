import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import CardInputForm from "./card-input-form";
import styles from "./registration-elev-container1.module.css";

const RegistrationElevContainer1: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/se-connecter-elev");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/elev-donne-perso");
  }, [router]);

  return (
    <div className={styles.frame}>
      <div className={styles.text}>
        <h1 className={styles.sinscrire}>S’inscrire</h1>
        <div className={styles.vousAvezUn}>Vous avez un compte?</div>
      </div>
      <Button
        className={styles.button}
        variant="primary"
        href="/seconnecterelev"
        onClick={onButtonClick}
      >
        Se connecter
      </Button>
      <div className={styles.frame1}>
        <CardInputForm firstName="Prenom" />
        <CardInputForm firstName="Nom" />
        <CardInputForm firstName="Téléphone" />
        <CardInputForm firstName="Email" />
        <CardInputForm firstName="Password" />
        <Button
          className={styles.button1}
          variant="primary"
          href="/elevdonneperso"
          onClick={onButton1Click}
        >
          Créer un Compte
        </Button>
      </div>
    </div>
  );
};

export default RegistrationElevContainer1;
