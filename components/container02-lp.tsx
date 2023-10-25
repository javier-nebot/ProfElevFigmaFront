import type { NextPage } from "next";
import styles from "./container02-lp.module.css";

const Container02Lp: NextPage = () => {
  return (
    <section className={styles.avantages} id="02Avantages">
      <div className={styles.titreh2Parent}>
        <h1 className={styles.titreh2}>Avantages</h1>
        <img className={styles.creativeIcon} alt="" src="/creative@2x.png" />
        <div className={styles.text}>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container02Lp;
