import { Button, Col, Row } from 'antd';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';

import Container from '@/components/container';
import { RouteCodes } from '@/constants/route-codes';
import Link from 'next/link';
import AccountCover from '@/components/account-cover';
import { useCallback, useMemo } from 'react';
import AccountAvatar, { AccountAvatarEdit } from '@/components/account-avatar';
import {
  StyledUserDescription,
  StyledUserEmail,
  StyledUserName,
} from '@/components/account/styled';

const Account = ({ edit = false, user = {}, logout, onChange, loading }) => {
  const onChangeCover = useCallback(
    (cover) => {
      onChange && onChange('coverId', cover.id);
    },
    [onChange],
  );

  const onChangeAvatar = useCallback(
    (image) => {
      onChange && onChange('imageId', image.id);
    },
    [onChange],
  );

  const AvatarComponent = useMemo(() => {
    return edit ? AccountAvatarEdit : AccountAvatar;
  }, [edit]);

  return (
    <>
      <AccountCover
        user={user}
        canUpload={edit}
        cover={user.cover}
        onChangeCover={onChangeCover}
      />
      <Container>
        <Row gutter={[0, 30]}>
          <Col span={24}>
            <AvatarComponent
              edit={edit}
              user={user}
              type='big'
              onChangeAvatar={onChangeAvatar}
            />
          </Col>
          <Col span={24}>
            <Row>
              <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                <StyledUserName>{user?.name}</StyledUserName>
                <StyledUserEmail level={5} type='secondary'>
                  {user?.email}
                </StyledUserEmail>
              </Col>
              {!!edit && (
                <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                  <Link shallow={true} href={RouteCodes.accountOwnerEdit}>
                    <Button icon={<EditOutlined />}>Редактировать</Button>
                  </Link>
                </Col>
              )}
            </Row>
          </Col>
          <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
            <StyledUserDescription level={5}>
              {user?.description}
            </StyledUserDescription>
          </Col>
          {!!edit && (
            <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
              <Button icon={<LogoutOutlined />} onClick={logout}>
                Выйти
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Account;
