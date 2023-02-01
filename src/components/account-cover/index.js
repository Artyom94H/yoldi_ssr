import { useCallback, useMemo } from 'react';
import {
  UploadOutlined,
  FileImageOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Button, message, Image } from 'antd';
import { StyledCoverImage, StyledUpload, Wrapper } from './styled';
import { useImageUpload } from '@/hooks/use-image-upload';
import UIHelper from '@/helpers/UIHelper';

const AccountCover = ({ cover = {}, canUpload = false, onChangeCover }) => {
  const { inProcess, upload } = useImageUpload();

  const fill = useMemo(() => {
    return !!cover?.id || !!cover?.url;
  }, [cover]);

  const onChange = useCallback(
    async (e) => {
      try {
        const response = await upload(e.file);
        onChangeCover(response);
      } catch (e) {}
    },
    [upload, onChangeCover],
  );

  const buttonContent = useMemo(() => {
    return (
      <>
        {!cover?.id ? 'Загрузить': 'Удалить'}
      </>
    );
  }, [cover]);



  const onDelete = useCallback(() => {
    if (cover?.id) {
      onChangeCover({ id: null });
    }
  }, [cover, onChangeCover]);

  return (
    <Wrapper inProcess={inProcess}>
      {!!fill && (
        <StyledCoverImage width={'100%'} src={cover.url} alt='cover' />
      )}
      {canUpload && (
        <StyledUpload
          beforeUpload={UIHelper.allowOnlyImage}
          showUploadList={false}
          multiply={false}
          name='cover'
          customRequest={onChange}
          disabled={!!cover?.id}
        >
          <Button onClick={onDelete} loading={inProcess} icon={cover?.id ? <DeleteOutlined /> : <UploadOutlined />}>
            {buttonContent} <FileImageOutlined />
          </Button>
        </StyledUpload>
      )}
    </Wrapper>
  );
};

export default AccountCover;
