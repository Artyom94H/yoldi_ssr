import SignUpForm from '@/components/sign-up-form';
import FlexBox from '@/components/flex-box';
import { useAuthForm } from '@/hooks/use-auth-form';

const SignUp = () => {
  const { loading, form, errors, onSignUp, resetErrors } = useAuthForm();

  return (
    <FlexBox>
      <SignUpForm
        form={form}
        errors={errors}
        onFinish={onSignUp}
        resetErrors={resetErrors}
        loading={loading}
      />
    </FlexBox>
  );
};

export default SignUp;
