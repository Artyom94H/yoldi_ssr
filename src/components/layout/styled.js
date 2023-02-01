import styled from 'styled-components';
import { Layout } from 'antd';
import { respondTo } from '@/styles/responsive/_respondTo';

const { Header, Content } = Layout;

export const StyledHeader = styled(Header)`
  min-height: 80px;
  ${respondTo.micro`
    padding: 0 20px !important;
  `}
`;

export const StyledContent = styled(Content)`
  padding-bottom: 50px;
  background-color: ${({ gray = false }) => gray ? '#E6E6E6' : '#ffffff'};
`;
