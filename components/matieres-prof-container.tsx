import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CardInputForm from "./card-input-form";
import styles from "./matieres-prof-container.module.css";

const MatieresProfContainer: NextPage = () => {
  return (
    <div className={styles.frame}>
      <h1 className={styles.matieresMetrisees}>Matieres metrisees</h1>
      <CardInputForm firstName="Matiere" />
      <CardInputForm firstName="Cours" />
      <Button className={styles.button} variant="primary">
        Sauvegarder
      </Button>
    </div>
  );
};

export default MatieresProfContainer;
