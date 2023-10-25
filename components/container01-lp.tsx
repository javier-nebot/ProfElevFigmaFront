import type { NextPage } from "next";
import styles from "./container01-lp.module.css";

const Container01Lp: NextPage = () => {
  return (
    <section className={styles.accueil} id="01Accueil">
      <h1 className={styles.profElevApp} id="TitleH1">
        Prof-Elev APP
      </h1>
      <div className={styles.frame}>
        <div className={styles.text}>
          <h1 className={styles.titreh2} id="01H1Accueil">
            Accueil
          </h1>
          <div className={styles.description}>
            Application que permet mettre en contacte des “Professeurs” -
            (personnes avec connaisances necessaires pour aider dans de cours de
            soutien dans des metiers specifiques) avec des “eleves
          </div>
        </div>
        <div className={styles.frameimage}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default Container01Lp;
