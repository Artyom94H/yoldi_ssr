import { Col, Row, Typography } from 'antd';

const FormErrors = ({ errors }) => {
  if (!errors) return null;

  if (Array.isArray(errors)) {
    return (
      <Row gutter={[10, 10]}>
        {errors.map((i, index) => (
          <Col span={24} key={i.msg || index.toString()}>
            <Typography.Text type='danger'>
              {i.msg || i}
            </Typography.Text>
          </Col>
        ))}
        <Col span={24} />
      </Row>
    );
  }
  return <></>;
};

export default FormErrors;
