import styles from "./container-lockup.module.css";
const ContainerLockup = () => {
  return (
    <div className={styles.mainLockup}>
      <div className={styles.header}>
        <div className={styles.accessCuratedCoursesWorthWrapper}>
          <div className={styles.accessCuratedCourses}>
            Access curated courses worth
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>₹ 18,500</div>
          <div className={styles.frameChild} />
          <div className={styles.atJustWrapper}>
            <div className={styles.atJust}>at just</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.atJust}>₹ 99</div>
          </div>
          <div className={styles.perYearWrapper}>
            <div className={styles.atJust}>per year!</div>
          </div>
        </div>
      </div>
      <div className={styles.pointer1}>
        <div className={styles.icon}>
          <img className={styles.iconChild} alt="" src="/group-20.svg" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <span className={styles.span}>{`100+ `}</span>
            <span className={styles.jobRelevantCourses}>
              <span>Job relevant courses</span>
              <span className={styles.span1}>{` `}</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.pointer1}>
        <div className={styles.icon1}>
          <img className={styles.iconItem} alt="" src="/group-19.svg" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <span className={styles.span}>{`20,000+ `}</span>
            <span className={styles.jobRelevantCourses}>Hours of content</span>
          </div>
        </div>
      </div>
      <div className={styles.pointer3}>
        <div className={styles.icon2}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.live}>live</div>
          </div>
        </div>
        <div className={styles.textContainer2}>
          <div className={styles.text}>
            <span className={styles.span}>{`Exclusive `}</span>
            <span className={styles.jobRelevantCourses}>webinar access</span>
          </div>
        </div>
      </div>
      <div className={styles.pointer4}>
        <div className={styles.icon3}>
          <img className={styles.iconInner} alt="" src="/group-17.svg" />
        </div>
        <div className={styles.textContainer3}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <span>{`Scholarship worth `}</span>
              <span className={styles.span3}>₹94,500</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pointer5}>
        <div className={styles.icon1}>
          <div className={styles.iconItem}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.ads}>ADS</div>
            <div className={styles.groupChild} />
          </div>
        </div>
        <div className={styles.textContainer2}>
          <div className={styles.text}>
            <span className={styles.span}>{`Ad Free `}</span>
            <span className={styles.jobRelevantCourses}>
              learning experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerLockup;
