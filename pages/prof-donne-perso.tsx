import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderProf from "../components/header-prof";
import PersonalDataProfContainer from "../components/personal-data-prof-container";
import Footer from "../components/footer";
import styles from "./prof-donne-perso.module.css";

const ProfDonnePerso: NextPage = () => {
  const router = useRouter();

  const onRightNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMatieresTextClick = useCallback(() => {
    router.push("/prof-matiere");
  }, [router]);

  const onListeElevTextClick = useCallback(() => {
    router.push("/prof-liste-e-leves");
  }, [router]);

  return (
    <div className={styles.profdonneperso}>
      <HeaderProf onRightNavClick={onRightNavClick} headerOverflow="unset" />
      <PersonalDataProfContainer />
      <Footer />
    </div>
  );
};

export default ProfDonnePerso;
