import { Spin } from 'antd';

import styles from './global-loader.module.scss';

const GlobalLoader = () => {
  return (
    <div className={styles.globalLoader}>
      <Spin size='large' />
    </div>
  );
};

export default GlobalLoader;
