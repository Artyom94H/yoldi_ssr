import SignInForm from '@/components/sign-in-form';
import FlexBox from '@/components/flex-box';
import { useAuthForm } from '@/hooks/use-auth-form';

const SignIn = () => {
  const { loading, form, errors, onSignIn, resetErrors } = useAuthForm();

  return (
    <FlexBox>
      <SignInForm
        form={form}
        errors={errors}
        onFinish={onSignIn}
        resetErrors={resetErrors}
        loading={loading}
      />
    </FlexBox>
  );
};

export default SignIn;
