import type { NextPage } from "next";
import Steps from "./steps";
import styles from "./container04-lp.module.css";

const Container04Lp: NextPage = () => {
  return (
    <section className={styles.comntmarche}>
      <h1 className={styles.titreh2}>Comment ça marche?</h1>
      <div className={styles.setps}>
        <Steps
          imageId="/webdesigncreate.svg"
          selectionOptionText="Selectione Prof ou eleve"
          accountTypeText="Cree un compte selon tu est un Prof ou un élevé"
        />
        <Steps
          imageId="/webdesignaddcontent.svg"
          selectionOptionText="Selectionne tes besoins"
          accountTypeText="Ajoute dans ton dossier tes connaissances ou les besoins de tes enfants."
        />
        <Steps
          imageId="/webdesignlaunch.svg"
          selectionOptionText="Fait le public!"
          accountTypeText="Un fois tu publie ton dossier tuauras acces a la liste  des profs ou eleves."
        />
      </div>
    </section>
  );
};

export default Container04Lp;
