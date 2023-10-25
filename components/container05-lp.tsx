import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./container05-lp.module.css";

const Container05Lp: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/se-connecter-elev");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/se-connecter-prof");
  }, [router]);

  return (
    <section className={styles.commencer}>
      <h1 className={styles.titreh2}>Commencer</h1>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          variant="primary"
          href="/seconnecterelev"
          onClick={onButtonClick}
        >
          Elev
        </Button>
        <Button
          className={styles.button}
          variant="primary"
          href="/seconnecterprof"
          onClick={onButton1Click}
        >
          Prof
        </Button>
      </div>
    </section>
  );
};

export default Container05Lp;
