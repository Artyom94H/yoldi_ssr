import { Col, Row, Input, Skeleton } from 'antd';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import AccountAvatar from '@/components/account-avatar';
import { SearchOutlined } from '@ant-design/icons';

import { RouteCodes } from '@/constants/route-codes';
import {
  StyledHorizontalDivider,
  StyledInfoRow,
  StyledTitle,
  StyledUserEmail,
  StyledUserName,
  StyledWrapper,
} from '@/components/account-list/styled';

const LoaderItem = () => {
  return (
    <>
      <Col span={24}>
        <Row gutter={[20, 20]}>
          <Col>
            <Skeleton.Avatar size={50} active={true} />
          </Col>
          <Col flex={1}>
            <StyledInfoRow
              gutter={[12, 12]}
              align='middle'
              justify='space-between'
            >
              <Col>
                <Skeleton.Input active={true} />
              </Col>
              <Col>
                <Skeleton.Input active={true} />
              </Col>
            </StyledInfoRow>
          </Col>
        </Row>
        <StyledHorizontalDivider />
      </Col>
    </>
  );
};

const AccountItem = ({ data = {} }) => {
  return (
    <>
      <Col span={24}>
        <Link href={RouteCodes.accountsGuest.replace(':id', data.slug)}>
          <Row gutter={[20, 20]}>
            <Col>
              <AccountAvatar type='small' user={data} mt={0} />
            </Col>
            <Col flex={1}>
              <StyledInfoRow align='middle' justify='space-between'>
                <Col>
                  <StyledUserName>{data.name}</StyledUserName>
                </Col>
                <Col>
                  <StyledUserEmail>{data.email}</StyledUserEmail>
                </Col>
              </StyledInfoRow>
            </Col>
          </Row>
          <StyledHorizontalDivider />
        </Link>
      </Col>
    </>
  );
};

const AccountList = ({ loading, data = [] }) => {
  const [value, setValue] = useState('');

  const result = useMemo(() => {
    const arrForLoader = Array.from(Array(10).keys());
    return (
      <Row gutter={[]}>
        {!!loading ? (
          arrForLoader.map((i, index) => <LoaderItem key={index.toString()} />)
        ) : (
          <>
            {data?.map((i, index) => (
              <AccountItem key={`${i.email}_${index}`} data={i} />
            ))}
          </>
        )}
      </Row>
    );
  }, [loading, data]);

  return (
    <StyledWrapper>
      {/*TODO realise search with debounce*/}
      {/*<Input*/}
      {/*  size='large'*/}
      {/*  placeholder='Искать'*/}
      {/*  prefix={<SearchOutlined />}*/}
      {/*  style={{ marginBottom: 30 }}*/}
      {/*  value={value}*/}
      {/*  onChange={(e) => setValue(e.target.value)}*/}
      {/*/>*/}
      <StyledTitle>Список аккаунтов</StyledTitle>
      <StyledHorizontalDivider />

      {result}
    </StyledWrapper>
  );
};

export default AccountList;
