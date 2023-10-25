import type { NextPage } from "next";
import styles from "./elev-list-prof-container.module.css";

const ElevListProfContainer: NextPage = () => {
  return (
    <div className={styles.listeProfsParent}>
      <h1 className={styles.listeProfs}>Liste Prof’s</h1>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.label1}>Prenom</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.label1}>Nom</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.label1}>Diplome</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.label1}>Telephone</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.label1}>Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevListProfContainer;
