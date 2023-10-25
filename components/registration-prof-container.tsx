import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import CardInputForm from "./card-input-form";
import styles from "./registration-prof-container.module.css";

const RegistrationProfContainer: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/se-connecter-prof");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/prof-donne-perso");
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
        href="/seconnecterprof"
        onClick={onButtonClick}
      >
        Se connecter
      </Button>
      <div className={styles.inputs}>
        <CardInputForm firstName="Prenom" />
        <CardInputForm firstName="Nom" />
        <CardInputForm firstName="Diplome" />
        <CardInputForm firstName="Age" />
        <CardInputForm firstName="Telephone" />
        <CardInputForm firstName="Email" />
        <CardInputForm firstName="Password" />
      </div>
      <Button
        className={styles.button1}
        variant="primary"
        href="/profdonneperso"
        onClick={onButton1Click}
      >
        Créer un Compte
      </Button>
    </div>
  );
};

export default RegistrationProfContainer;
