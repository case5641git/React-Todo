import styles from "./styles.module.css";

export const InputForm = ({
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
  />
);
