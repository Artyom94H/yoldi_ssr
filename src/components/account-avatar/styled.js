import styled, { css } from 'styled-components';
import { Avatar, Typography, Upload } from 'antd';

export const StyledLetterText = styled(Typography.Text)`
  display: flex !important;
  transition: 0.3s ease all;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ type }) => (type === 'big' ? '36px' : '18px')};
  line-height: 140%;

  align-items: center;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: #f3f3f3;
  color: #000000;
  margin-top: ${({ mt = '-50px' }) => mt};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAvatarEdit = styled.div`
  background-color: #f3f3f3;
  position: absolute;
  left: 0;
  color: #000000;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const StyledEditWrapper = styled.div`
  margin-top: -55px;
  position: relative;
  margin-bottom: 75px;
`;

export const StyledUpload = styled(Upload)`
  margin-bottom: 100px;
  cursor: pointer;
  top: 0;
  transition: 0.3s ease all;

  :hover {
    background-color: #000000;
    color: #ffffff;
    .ant-avatar {
      display: none;
    }
    ${StyledAvatarEdit} {
      background-color: #000000;
    }
    ${StyledLetterText} {
      display: none !important;
    }
    ${StyledImage} {
      display: none !important;
    }
  }
`;
