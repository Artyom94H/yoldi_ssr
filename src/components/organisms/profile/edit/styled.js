import styled from 'styled-components';
import { Input, Typography } from 'antd';

export const StyledTitle = styled(Typography.Title)`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
  color: #000000;
`;

export const StyledTextArea = styled(Input.TextArea)`
  height: 154px !important;
  resize: none !important;
`;
