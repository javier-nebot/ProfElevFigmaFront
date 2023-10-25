import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./connexion-container.module.css";

type ConnexionContainerType = {
  /** Action props */
  onButtonClick?: () => void;
  onButton1Click?: () => void;
};

const ConnexionContainer: NextPage<ConnexionContainerType> = ({
  onButtonClick,
  onButton1Click,
}) => {
  return (
    <div className={styles.frame}>
      <div className={styles.text}>
        <h1 className={styles.seConnecter}>Se connecter</h1>
        <div
          className={styles.vousNavezPas}
        >{`Vous n’avez pas un compte? `}</div>
        <Button
          className={styles.button}
          variant="primary"
          href="/sinscrireprof"
          onClick={onButtonClick}
        >
          S’inscrire
        </Button>
      </div>
      <div className={styles.input}>
        <div className={styles.label}>
          <div className={styles.email}>Email</div>
        </div>
        <Form className={styles.textfield}>
          <Form.Control type="text" name="Email" />
        </Form>
      </div>
      <div className={styles.input}>
        <div className={styles.label}>
          <div className={styles.email}>Password</div>
        </div>
        <Form className={styles.textfield}>
          <Form.Control type="text" name="Password" />
        </Form>
      </div>
      <Button
        className={styles.button1}
        variant="primary"
        href="/profdonneperso"
        onClick={onButton1Click}
      >
        Se Connecter
      </Button>
    </div>
  );
};

export default ConnexionContainer;
