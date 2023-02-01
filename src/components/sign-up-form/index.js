import { Button, Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import FormWrapper from '@/components/form-wrapper';
import FormErrors from '@/components/form-errors';
import { useMemo } from 'react';

const SignUpForm = ({ onFinish, form, resetErrors, loading, errors }) => {
  const emailValue = Form.useWatch('email', form);
  const passwordValue = Form.useWatch('password', form);
  const nameValue = Form.useWatch('name', form);

  const disableSubmit = useMemo(() => {
    return !emailValue || !passwordValue || !nameValue;
  }, [emailValue, passwordValue, nameValue]);

  return (
    <FormWrapper>
      <Typography.Title>Регистрация в Yoldi Agency</Typography.Title>
      <Form
        autoComplete='off'
        form={form}
        name='signUp'
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onFinish={onFinish}
        onFieldsChange={() => {
          if (resetErrors) {
            resetErrors();
          }
        }}
      >
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: 'Пожалуйста заполните ваше имя!',
            },
          ]}
        >
          <Input size='large' prefix={<UserOutlined />} placeholder='Имя' />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: 'Пожалуйста заполните ваш E-mail!',
            },
            {
              type: 'email',
              message: 'Пожалуйста заполните правильный E-mail!',
            },
          ]}
        >
          <Input size='large' prefix={<MailOutlined />} placeholder='E-mail' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Пожалуйста заполните ваш пароль!',
            },
          ]}
        >
          <Input.Password
            size='large'
            prefix={<LockOutlined />}
            placeholder='Пароль'
          />
        </Form.Item>
        <FormErrors errors={errors} />
        <Button
          disabled={disableSubmit}
          size='large'
          loading={loading}
          style={{ width: '100%' }}
          htmlType='submit'
        >
          Вход
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SignUpForm;
