import { useState } from "react";

const types = {
  firstName: {
    regex: /[A-Z][a-z]*/,
    message: "Fill in a valid first name",
    emptyMessage: "First Name cannot be empty",
  },
  lastName: {
    regex: /[A-Z][a-z]*/,
    message: "Fill in a valid last name",
    emptyMessage: "Last Name cannot be empty",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Looks like this is not an email",
    emptyMessage: "Looks like this is not an email",
  },
  password: {
    regex:
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/,
    message:
      "The password must have: 8 characters, an uppercase letter, a lowercase letter and a special character.",
    emptyMessage: "Looks like this is not an email",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      if (types[type]) setError(types[type].emptyMessage);
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
