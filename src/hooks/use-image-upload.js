import ImageApi from '@/libs/api/image';
import { useCallback, useState } from 'react';
import { message } from 'antd';

const api = new ImageApi();

export const useImageUpload = () => {
  const [inProcess, setInProcess] = useState(false);

  const upload = useCallback(async (file) => {
    try {
      setInProcess(true);
      const formData = new FormData();
      formData.append('file', file.originFileObj || file);
      const { data } = await api.create({
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      return data;
    } catch (e) {
      console.log('Error', e);
      message.error('Oops');
    } finally {
      setInProcess(false);
    }
  }, []);

  return {
    inProcess,
    upload,
  };
};
