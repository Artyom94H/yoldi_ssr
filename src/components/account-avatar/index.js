import { useCallback, useMemo } from 'react';
import {
  StyledAvatar,
  StyledAvatarEdit,
  StyledEditWrapper,
  StyledImage,
  StyledLetterText,
  StyledUpload,
} from '@/components/account-avatar/styled';
import { PictureOutlined, LoadingOutlined } from '@ant-design/icons';
import UIHelper from '@/helpers/UIHelper';
import { useImageUpload } from '@/hooks/use-image-upload';
import { Avatar, Col, Row } from 'antd';

export const AccountAvatarEdit = ({ user, onChangeAvatar, edit = false }) => {
  const { inProcess, upload } = useImageUpload();

  const avatarLetter = useMemo(() => {
    if (!user?.image?.id) {
      return user.name[0];
    }

    return user.image.url;
  }, [user]);

  const onChange = useCallback(
    async (e) => {
      try {
        const response = await upload(e.file);
        onChangeAvatar(response);
      } catch (e) {}
    },
    [upload, onChangeAvatar],
  );

  const iconProps = {
    style: { color: '#ffffff', fontSize: 30 },
    size: 40,
    color: '#ffffff',
  };

  return (
    <StyledEditWrapper>
      <StyledUpload
        beforeUpload={UIHelper.allowOnlyImage}
        showUploadList={false}
        multiply={false}
        name='image'
        customRequest={onChange}
      >
        <StyledAvatarEdit
          haveImage={!!user?.image?.url}
          canEdit={edit}
          size={100}
        >
          {user?.image?.url ? (
            <StyledImage src={user?.image?.url} />
          ) : (
            <StyledLetterText ellipsis={true}>{avatarLetter}</StyledLetterText>
          )}
          {inProcess ? (
            <LoadingOutlined spin={true} {...iconProps} />
          ) : (
            <PictureOutlined {...iconProps} />
          )}
        </StyledAvatarEdit>
      </StyledUpload>
    </StyledEditWrapper>
  );
};

const AccountAvatar = ({ user, mt, type = 'big' }) => {
  const avatarLetter = useMemo(() => {
    if (!user?.image?.id) {
      return user.name[0];
    }

    return user.image.url;
  }, [user]);

  return (
    <StyledAvatar
      mt={mt}
      src={user?.image?.url}
      size={type === 'big' ? 100 : 50}
    >
      <StyledLetterText type={type} ellipsis={true}>
        {avatarLetter}
      </StyledLetterText>
    </StyledAvatar>
  );
};

export default AccountAvatar;
