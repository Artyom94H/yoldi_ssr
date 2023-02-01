import { Button, Col, Row, Space, Dropdown, Avatar, Typography } from 'antd';
import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RouteCodes } from '@/constants/route-codes';
import { useAuth } from '@/context/auth';
import ResponsiveBlock from '@/components/responsive-block';
import AccountAvatar, { AccountAvatarEdit } from '@/components/account-avatar';
import FlexBox from '@/components/flex-box';

const PrimaryHeader = () => {
  const { user } = useAuth();
  const { pathname } = useRouter();

  const items = useMemo(() => {
    return [
      {
        key: 'accounts',
        label: (
          <>
            <Link href={'/'}>Список аккаунтов</Link>
          </>
        ),
      },
    ];
  }, []);

  const rightSide = useMemo(() => {
    const isSignIn = pathname.includes(RouteCodes.signIn);
    const path = isSignIn ? RouteCodes.signUp : RouteCodes.signIn;

    if (user) {
      return (
        <>
          <Row align='middle' gutter={[20, 20]} style={{ height: '100%' }}>
            <Col>
              <Link href={RouteCodes.accountOwner || '/'}>
                <Typography.Text>{user?.name}</Typography.Text>
              </Link>
            </Col>
            <Col>
              <Link href={RouteCodes.accountOwner || '/'}>
                <AccountAvatar user={user} type='small' mt={0} />
              </Link>
            </Col>
          </Row>
        </>
      );
    }

    return (
      <>
        <Row align='middle' gutter={[20, 20]} style={{ height: '100%' }}>
          <Col>
            <Link href={path}>
              <Button>{isSignIn ? 'Зарегистрироватся' : 'Войти'}</Button>
            </Link>
          </Col>
        </Row>

      </>
    );
  }, [pathname, user]);

  return (
    <>
      <Row style={{ height: '100%' }}>
        <Col span={12}>
          <Row align='middle' gutter={[20, 20]} style={{ height: '100%' }}>
            <Col>
              <Link href={RouteCodes.home || '/'}>
                <Row align='middle'>
                  {/*<Logo />*/}
                  <img src='/assets/icons/logo.png' alt='logo' />
                </Row>
              </Link>
            </Col>
            <ResponsiveBlock
              as={Col}
              show={{ xxl: true, xl: true, lg: true, md: true }}
            >
              <Typography.Text style={{ display: 'flex' }}>
                Разрабатываем и запускаем <br /> сложные веб проекты
              </Typography.Text>
            </ResponsiveBlock>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='end' align='center' style={{ height: '100%' }}>
            <Col>{rightSide}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PrimaryHeader;
