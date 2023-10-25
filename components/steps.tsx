import type { NextPage } from "next";
import styles from "./steps.module.css";

type StepsType = {
  imageId?: string;
  selectionOptionText?: string;
  accountTypeText?: string;
};

const Steps: NextPage<StepsType> = ({
  imageId,
  selectionOptionText,
  accountTypeText,
}) => {
  return (
    <div className={styles.div}>
      <img className={styles.webdesigncreateIcon} alt="" src={imageId} />
      <div className={styles.details}>
        <h2 className={styles.heading}>{selectionOptionText}</h2>
        <div className={styles.description}>{accountTypeText}</div>
      </div>
    </div>
  );
};

export default Steps;
