import styles from './form-wrapper.module.scss';

const FormWrapper = ({ children }) => {
  return <div className={styles.formWrapper}>{children}</div>;
};

export default FormWrapper;
