import SubscriptionContainer from "./subscription-container";
import styles from "./subscription-plan-container.module.css";
const SubscriptionPlanContainer = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.textField1}>
        <img
          className={styles.radioButtonIcon}
          alt=""
          src="/radio-button.svg"
        />
        <div className={styles.textContainer}>
          <div className={styles.text}>{`12 Months Subscription `}</div>
          <div className={styles.rightTextContainer}>
            <div className={styles.topText}>
              <div className={styles.text1}>Total</div>
              <div className={styles.text2}>₹99</div>
            </div>
            <div className={styles.bottomText}>
              <div className={styles.text3}>₹8</div>
              <div className={styles.text4}>/mo</div>
            </div>
          </div>
        </div>
        <div className={styles.tag}>
          <div className={styles.offerExpired}>Offer expired</div>
        </div>
      </div>
      <div className={styles.textField2}>
        <img
          className={styles.radioButtonIcon}
          alt=""
          src="/radio-button1.svg"
        />
        <div className={styles.textContainer}>
          <div className={styles.text}>{`12 Months Subscription `}</div>
          <div className={styles.rightTextContainer1}>
            <div className={styles.topText}>
              <div className={styles.text6}>Total</div>
              <div className={styles.text2}>₹179</div>
            </div>
            <div className={styles.bottomText}>
              <div className={styles.text3}>₹15</div>
              <div className={styles.text9}>/mo</div>
            </div>
          </div>
        </div>
        <div className={styles.tag1}>
          <div className={styles.recommended}>Recommended</div>
        </div>
      </div>
      <SubscriptionContainer
        subscriptionDuration="6 Months Subscription "
        subscriptionPrice="₹149"
        subscriptionDurationPrice="₹25"
      />
      <SubscriptionContainer
        subscriptionDuration="3 Months Subscription "
        subscriptionPrice="₹99"
        subscriptionDurationPrice="₹33"
      />
    </div>
  );
};

export default SubscriptionPlanContainer;
