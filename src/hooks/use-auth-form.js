import { Form } from 'antd';
import { useAuth } from '@/context/auth';
import { useCallback, useState } from 'react';

export const useAuthForm = () => {
  const [form] = Form.useForm();
  const { signUp, signIn, loading } = useAuth();
  const [errors, setErrors] = useState(null);

  const resetErrors = useCallback(() => {
    if (errors) {
      setErrors(null);
    }
  }, [errors]);

  const onSignUp = useCallback(
    async (values) => {
      try {
        await signUp(values);
      } catch (e) {
        setErrors([e?.response?.data?.message]);
      }
    },
    [signUp],
  );

  const onSignIn = useCallback(
    async (values) => {
      try {
        await signIn(values);
      } catch (e) {
        setErrors([e?.response?.data?.message]);
      }
    },
    [signIn],
  );

  return {
    form,
    onSignIn,
    onSignUp,
    loading,
    resetErrors,
    errors,
  };
};
