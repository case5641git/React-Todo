import styles from "./styles.module.css";

export const CustomButton = ({ type, label, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};
