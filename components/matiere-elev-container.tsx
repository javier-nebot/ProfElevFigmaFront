import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CardInputForm from "./card-input-form";
import styles from "./matiere-elev-container.module.css";

const MatiereElevContainer: NextPage = () => {
  return (
    <div className={styles.frame}>
      <h1 className={styles.elevEtMatiere}>Elev et matiere de soutien</h1>
      <CardInputForm firstName="Prenom" />
      <CardInputForm firstName="Nom" />
      <CardInputForm firstName="Cours" />
      <CardInputForm firstName="Matiere" />
      <Button className={styles.button} variant="primary">
        Sauvegarder
      </Button>
    </div>
  );
};

export default MatiereElevContainer;
