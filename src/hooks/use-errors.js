import { useState, useCallback } from 'react';

export const useErrors = () => {
  const [errors, setErrors] = useState(null);

  const resetErrors = useCallback(() => {
    if (errors) {
      setErrors(null);
    }
  }, [errors]);

  return {
    errors,
    resetErrors,
    setErrors,
  };
};
