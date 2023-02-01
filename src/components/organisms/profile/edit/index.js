import { Button, Col, Form, Input, Modal, Row, Typography } from 'antd';
import FormErrors from '@/components/form-errors';
import { useAccountEdit } from '@/hooks/use-account-edit';
import { RouteCodes } from '@/constants/route-codes';
import { StyledTextArea, StyledTitle } from '@/components/organisms/profile/edit/styled';

const AccountOwnerEdit = ({ open }) => {
  const { form, onSubmit, loading, errors, resetErrors, onCancel } =
    useAccountEdit();

  return (
    <Modal open={open} onCancel={onCancel} footer={false}>
      <StyledTitle>Редактировать профиль</StyledTitle>
      <Form
        form={form}
        name='accountEdit'
        initialValues={{
          description: 'Можешь менять, но толка нету, в апи нету этого поля',
        }}
        wrapperCol={{
          span: 24,
        }}
        layout={'vertical'}
        onFinish={onSubmit}
        onFieldsChange={resetErrors}
      >
        <Form.Item name='name' label='Имя'>
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item name='slug' label='Адрес профиля'>
          <Input
            addonBefore={`${
              window.location.origin
            }${RouteCodes.accountsGuest.replace(':id', '')}`}
            placeholder='slug'
          />
        </Form.Item>
        <Form.Item name='description' label='Описание'>
          <StyledTextArea placeholder='description' />
        </Form.Item>
      </Form>
      <FormErrors errors={errors} />
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Button size='large' style={{ width: '100%' }} onClick={onCancel}>Отмена</Button>
        </Col>
        <Col span={12}>
          <Button
            loading={loading}
            style={{ width: '100%' }}
            type='primary'
            size='large'
            onClick={form.submit}
          >
            Сохранить
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default AccountOwnerEdit;
