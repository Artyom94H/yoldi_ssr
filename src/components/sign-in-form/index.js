import { Button, Form, Input, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import FormWrapper from '@/components/form-wrapper';
import FormErrors from '@/components/form-errors';
import { useMemo } from 'react';

const SignInForm = ({ onFinish, form, resetErrors, loading, errors, }) => {
  const emailValue = Form.useWatch('email', form);
  const passwordValue = Form.useWatch('password', form);

  const disableSubmit = useMemo(() => {
    return !emailValue || !passwordValue;
  }, [emailValue, passwordValue]);

  return (
    <FormWrapper>
      <Typography.Title>
        Вход в Yoldi Agency
      </Typography.Title>
      <Form
        form={form}
        name='signIn'
        initialValues={{
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
          <Input.Password size='large' prefix={<LockOutlined />} placeholder='Пароль' />
        </Form.Item>
        <FormErrors errors={errors} />
        <Button disabled={disableSubmit} size='large' loading={loading} style={{ width: '100%' }} htmlType='submit'>
          Вход
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SignInForm;
