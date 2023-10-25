import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./card-input-form.module.css";

type CardInputFormType = {
  firstName?: string;
};

const CardInputForm: NextPage<CardInputFormType> = ({ firstName }) => {
  return (
    <div className={styles.input}>
      <div className={styles.label}>
        <div className={styles.prenom}>{firstName}</div>
      </div>
      <Form className={styles.textfield}>
        <Form.Control type="text" name="Prenom" />
      </Form>
    </div>
  );
};

export default CardInputForm;
