import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NavigationLink = (props) => (
  <li className={styles.li}>
    <Link to={props.LinkPath}>{props.LinkTitle}</Link>
  </li>
);
