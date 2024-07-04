import { Navigation } from "../../molecules/Navigation";
import styles from "./styles.module.css";

export const BaseLayout = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{props.title}</h1>
      {props.children}
    </div>
  );
};
