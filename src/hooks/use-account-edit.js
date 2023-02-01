import { useState, useEffect, useCallback } from 'react';
import { Form, notification } from 'antd';
import ProfileApi from '@/libs/api/profile';
import { useErrors } from '@/hooks/use-errors';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth';
import { RouteCodes } from '@/constants/route-codes';

const api = new ProfileApi();

export const useAccountEdit = () => {
  const { user, setUser } = useAuth();
  const [form] = Form.useForm();
  const { push } = useRouter();
  const { errors, resetErrors, setErrors } = useErrors();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!user) {
      let fieldsValues = [];
      for (let key in user) {
        fieldsValues.push({
          name: key,
          value: user[key],
        });
      }
      form.setFields(fieldsValues);
    }
  }, [user, form]);

  const onSubmit = useCallback(
    async (values) => {
      try {
        setLoading(true);
        const { data } = await api.patch(null, {
          data: values,
        });
        setUser((s) => ({
          ...s,
          ...(data || {}),
        }));
        notification.success({
          message: 'Successfully updated',
          type: 'success',
        });
        push(RouteCodes.accountOwner);
      } catch (e) {
        console.log('Error', e);
        setErrors([e?.response?.data?.message || '']);
      } finally {
        setLoading(false);
      }
    },
    [setUser, push, setErrors],
  );

  const onCancel = useCallback(() => {
    push(RouteCodes.accountOwner);
  }, [push]);

  return {
    form,
    loading,
    onSubmit,
    errors,
    resetErrors,
    onCancel,
  };
};
