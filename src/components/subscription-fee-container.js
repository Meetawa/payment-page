import styles from "./subscription-fee-container.module.css";
const SubscriptionFeeContainer = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.textContainer}>
        <div className={styles.text}>Subscription Fee</div>
        <div className={styles.text1}>₹18,500</div>
      </div>
      <div className={styles.alert}>
        <div className={styles.textContainer}>
          <div className={styles.text2}>Limited time offer</div>
          <div className={styles.text3}>- ₹18,401</div>
        </div>
        <div className={styles.alertBody}>
          <img className={styles.iconClock} alt="" src="/icon-clock.svg" />
          <div
            className={styles.text}
          >{`Offer valid till 25th March 2023 `}</div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <span className={styles.total}>{`Total `}</span>
          <span>(Incl. of 18% GST)</span>
        </div>
        <b className={styles.rightText}>₹149</b>
      </div>
    </div>
  );
};

export default SubscriptionFeeContainer;
