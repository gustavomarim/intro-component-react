import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name, value, onChange, error, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        name={name}
        placeholder={label}
        className={`${!error ? styles.input : styles.inputError}`}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
