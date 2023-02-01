import { Col, Row, Space, Typography } from 'antd';

import { useMemo } from 'react';
import { RouteCodes } from '@/constants/route-codes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth';

const PrimaryFooter = () => {
  const { user } = useAuth();
  const { pathname } = useRouter();

  const content = useMemo(() => {
    const isSignIn = pathname.includes(RouteCodes.signIn);
    const path = isSignIn ? RouteCodes.signUp : RouteCodes.signIn;
    const signInText = 'Нету аккаунта ?';
    const signUpText = 'Уже есть аккоунт ?';
    return (
      <Space>
        <Typography.Text type='secondary'>
          {isSignIn ? signInText : signUpText}
        </Typography.Text>
        <Typography.Text>
          <Link href={path}>
            {isSignIn ? 'Зарегистрироватся' : 'Войти'}
          </Link>
        </Typography.Text>
      </Space>
    );
  }, [pathname]);
  return (
    <>
      {!user && (
        <Row justify='center'>
          <Col>
            {content}
          </Col>
        </Row>
      )}
    </>
  );
};

export default PrimaryFooter;
