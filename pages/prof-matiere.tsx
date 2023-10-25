import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderProf from "../components/header-prof";
import MatieresProfContainer from "../components/matieres-prof-container";
import Footer from "../components/footer";
import styles from "./prof-matiere.module.css";

const ProfMatiere: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  const onListeElevTextClick = useCallback(() => {
    router.push("/prof-liste-e-leves");
  }, [router]);

  return (
    <div className={styles.profmatiere}>
      <HeaderProf onRightNavClick={onRightNavClick} headerOverflow="hidden" />
      <MatieresProfContainer />
      <Footer />
    </div>
  );
};

export default ProfMatiere;
