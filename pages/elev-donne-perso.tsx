import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderElev from "../components/header-elev";
import PersonalDataElevContainer from "../components/personal-data-elev-container";
import Footer from "../components/footer";
import styles from "./elev-donne-perso.module.css";

const ElevDonnePerso: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/elev-matiere");
  }, [router]);

  const onListeProfTextClick = useCallback(() => {
    router.push("/elev-liste-prof");
  }, [router]);

  return (
    <div className={styles.elevdonneperso}>
      <HeaderElev onRightNavClick={onRightNavClick} />
      <PersonalDataElevContainer />
      <Footer />
    </div>
  );
};

export default ElevDonnePerso;
