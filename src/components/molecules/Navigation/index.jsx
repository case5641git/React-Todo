import { NavigationLink } from "../../atoms/NavigationLink";
import { NAVIGATION_PATH } from "../../../constants/navigations";
import styles from "./styles.module.css";

export const Navigation = () => (
  <nav>
    <ul className={styles.ul}>
      <NavigationLink LinkPath={NAVIGATION_PATH.TOP} LinkTitle={"TOP"} />
      <NavigationLink LinkPath={NAVIGATION_PATH.CREATE} LinkTitle={"CREATE"} />
    </ul>
  </nav>
);
