import styles from "./subscription-container.module.css";
const SubscriptionContainer = ({
  subscriptionDuration,
  subscriptionPrice,
  subscriptionDurationPrice,
}) => {
  return (
    <div className={styles.textField3}>
      <img className={styles.radioButtonIcon} alt="" src="/radio-button2.svg" />
      <div className={styles.textContainer}>
        <div className={styles.text}>{subscriptionDuration}</div>
        <div className={styles.leftTextContainer}>
          <div className={styles.topText}>
            <div className={styles.text1}>Total</div>
            <div className={styles.text2}>{subscriptionPrice}</div>
          </div>
          <div className={styles.bottomText}>
            <div className={styles.text3}>{subscriptionDurationPrice}</div>
            <div className={styles.text4}>/mo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
