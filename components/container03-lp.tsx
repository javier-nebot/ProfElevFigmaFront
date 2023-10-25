import type { NextPage } from "next";
import styles from "./container03-lp.module.css";

const Container03Lp: NextPage = () => {
  return (
    <section className={styles.opinion}>
      <h1 className={styles.titreh2}>
        Commentaires des nôtres utilisateurs...
      </h1>
      <div className={styles.description}>
        Nous travaillons dans la ville de Toulouse
      </div>
      <div className={styles.testimonials}>
        <div className={styles.texttestimonial}>
          <img className={styles.cardIcon} alt="" src="/card.svg" />
          <div className={styles.text}>
            <h2 className={styles.title}>Centralisation</h2>
            <div className={styles.content}>
              Je peux trouver des profs dans tout Toulouse sans avoir de
              chercher sur plusieurs plateformes.
            </div>
          </div>
          <div className={styles.clientdetails1}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
            <div className={styles.persondetails}>
              <b className={styles.name}>Jane Cooper</b>
              <div className={styles.designation}>CEO at ABC Corporation</div>
            </div>
          </div>
        </div>
        <div className={styles.texttestimonial}>
          <img className={styles.cardIcon1} alt="" src="/card.svg" />
          <div className={styles.text}>
            <h2 className={styles.title}>Plus de chances</h2>
            <div className={styles.content}>
              Grand nombre des personnes disponibles pour le renfort de cours
              pour mes enfants.
            </div>
          </div>
          <div className={styles.clientdetails1}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
            <div className={styles.persondetails}>
              <b className={styles.name}>Jane Cooper</b>
              <div className={styles.designation}>CEO at ABC Corporation</div>
            </div>
          </div>
        </div>
        <div className={styles.texttestimonial}>
          <img className={styles.cardIcon} alt="" src="/card.svg" />
          <div className={styles.text}>
            <h2 className={styles.title}>Disponibilité</h2>
            <div className={styles.content}>
              Amplitude horaire pour les cours ou facilement discutable pour la
              bonne entente.
            </div>
          </div>
          <div className={styles.clientdetails1}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
            <div className={styles.persondetails}>
              <b className={styles.name}>Jane Cooper</b>
              <div className={styles.designation}>CEO at ABC Corporation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container03Lp;
