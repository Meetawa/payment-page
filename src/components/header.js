import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.logo}>
            <div className={styles.edyoda}>EDYODA</div>
          </div>
          <div className={styles.courses}>
            <div className={styles.text}>Courses</div>
            <img
              className={styles.iconChevronDown}
              alt=""
              src="/icon-chevron-down.svg"
            />
          </div>
          <div className={styles.courses}>
            <div className={styles.text}>Programs</div>
            <img
              className={styles.iconChevronDown}
              alt=""
              src="/icon-chevron-down.svg"
            />
          </div>
        </div>
        <div className={styles.leftContent}>
          <img
            className={styles.iconChevronDown}
            alt=""
            src="/search-icon.svg"
          />
          <div className={styles.logIn}>
            <div className={styles.text}>Log in</div>
          </div>
          <div className={styles.primaryButton}>
            <b className={styles.text3}>join now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
