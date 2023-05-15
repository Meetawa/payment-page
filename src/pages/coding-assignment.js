import Header from "../components/header";
import SubscriptionPlanContainer from "../components/subscription-plan-container";
import SubscriptionFeeContainer from "../components/subscription-fee-container";
import ContainerLockup from "../components/container-lockup";
import styles from "./coding-assignment.module.css";
const CodingAssignment = () => {
  return (
    <div className={styles.codingAssignment}>
      <Header />
      <div className={styles.contentContainer}>
        <img className={styles.backGroundIcon} alt="" src="/back-ground.png" />
        <div className={styles.form}>
          <div className={styles.progressBar}>
            <div className={styles.stage1}>
              <div className={styles.icon1}>
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.text1}>Sign Up</div>
            </div>
            <div className={styles.stage1}>
              <div className={styles.icon1}>
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.text1}>Subscribe</div>
            </div>
          </div>
          <div className={styles.formHeader}>
            <div className={styles.text}>Select your subcription plan</div>
          </div>
          <SubscriptionPlanContainer />
          <SubscriptionFeeContainer />
          <div className={styles.buttonContainer}>
            <div className={styles.secondaryButton}>
              <b className={styles.text2}>cancel</b>
            </div>
            <div className={styles.primaryButton}>
              <b className={styles.text2}>proceed to pay</b>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.razorpayIcon}>
              <img
                className={styles.razorpayIconChild}
                alt=""
                src="/frame.png"
              />
            </div>
          </div>
        </div>
        <ContainerLockup />
      </div>
    </div>
  );
};

export default CodingAssignment;
