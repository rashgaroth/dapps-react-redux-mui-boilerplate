import { useState } from 'react';

const useFormFields = initialState => {
  const [fields, setValues] = useState(initialState);
  const reset = () => setValues(initialState);
  const set = val => setValues(val);

  return {
    fields,
    handleFieldsChange: event => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
    reset,
    set,
  };
};

export default useFormFields;
