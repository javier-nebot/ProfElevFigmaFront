import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderProf from "../components/header-prof";
import ProfListElevContainer from "../components/prof-list-elev-container";
import Footer from "../components/footer";
import styles from "./prof-liste-e-leves.module.css";

const ProfListeELeves: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDonnesPersoTextClick = useCallback(() => {
    router.push("/prof-donne-perso");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/prof-matiere");
  }, [router]);

  return (
    <div className={styles.proflisteeleves}>
      <HeaderProf onRightNavClick={onRightNavClick} />
      <ProfListElevContainer />
      <Footer />
    </div>
  );
};

export default ProfListeELeves;
