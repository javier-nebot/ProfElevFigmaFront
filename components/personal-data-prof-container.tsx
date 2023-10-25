import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CardInputForm from "./card-input-form";
import styles from "./personal-data-prof-container.module.css";

const PersonalDataProfContainer: NextPage = () => {
  return (
    <div className={styles.frame}>
      <h1 className={styles.donnesPerso}>Donnes Perso</h1>
      <CardInputForm firstName="Prenom" />
      <CardInputForm firstName="Nom" />
      <CardInputForm firstName="Diplome" />
      <CardInputForm firstName="Age" />
      <CardInputForm firstName="Telephone" />
      <CardInputForm firstName="Email" />
      <CardInputForm firstName="Password" />
      <Button className={styles.button} variant="primary">
        Sauvegarder
      </Button>
    </div>
  );
};

export default PersonalDataProfContainer;
