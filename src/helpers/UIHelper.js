import { message, notification } from 'antd';

class UIHelper {
  static serverError = () => {
    notification.config({
      duration: 4,
    });
    notification.error({
      message: 'Упс, пожалуйста связитесь с нами',
    });
  };

  static showSuccess = (message = 'Успешно обнавлен') => {
    notification.success({
      message,
    });
  };

  static allowOnlyImage = (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }

    return isJpgOrPng;
  }
}

export default UIHelper;
