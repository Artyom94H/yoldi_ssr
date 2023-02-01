import styled from 'styled-components';
import { Col, Divider, Row, Typography } from 'antd';
import { respondTo } from '@/styles/responsive/_respondTo';

export const StyledWrapper = styled.div`
  margin-top: 50px;
`;

export const StyledTitle = styled(Typography.Title)`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
  color: #000000;
  margin-bottom: 30px !important;
`;

export const StyledUserEmail = styled(Typography.Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #838383;
`;

export const StyledUserName = styled(Typography.Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #000000;
`;

export const StyledHorizontalDivider = styled(Divider)`
  margin: 10px 0;
`;

export const StyledInfoRow = styled(Row)`
  width: 100%;
  height: 100%;
  ${respondTo.micro`
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  `}
  ${respondTo.xs`
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  `}
  ${respondTo.sm`
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  `}
`;
