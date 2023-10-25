import type { NextPage } from "next";
import styles from "./prof-list-elev-container.module.css";

const ProfListElevContainer: NextPage = () => {
  return (
    <div className={styles.frame}>
      <h1 className={styles.listeElevs}>Liste elev’s</h1>
      <div className={styles.labelParent}>
        <div className={styles.label}>
          <div className={styles.prenomtuteur}>PrenomTuteur</div>
        </div>
        <div className={styles.input}>
          <div className={styles.label1}>
            <div className={styles.prenomtuteur}>NomTuteur</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label1}>
            <div className={styles.prenomtuteur}>NomEleve</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label1}>
            <div className={styles.prenomtuteur}>Matiere</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label1}>
            <div className={styles.prenomtuteur}>Telephone</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label1}>
            <div className={styles.prenomtuteur}>Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfListElevContainer;
