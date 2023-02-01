import styled from 'styled-components';
import { Upload } from 'antd';

export const StyledUpload = styled(Upload)`
  display: none;
`;

export const StyledCoverImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  height: 200px;
  position: relative;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: ${({ inProcess }) => (inProcess ? 'not-allowed' : 'auto')};
  :hover {
    ${StyledUpload} {
      display: block;
    }
  }
`;
