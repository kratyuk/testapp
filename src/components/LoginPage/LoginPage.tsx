import React from 'react';
import './LoginPage.less'
import { Form, Button, Input } from 'antd';
// import { NavLink } from 'react-router-dom';

const LoginPage: React.FC = () => {

  const layout = {
    wrapperCol: { offset: 6, span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
  };

  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-page">
       <Form
        {...layout}
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          className="login-form__input"
          name="username"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой логин!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="login-form__input"
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой пароль!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button className="login-form__button" type="primary" htmlType="submit"> Войти </Button>
        </Form.Item>
      </Form>
      {/* <NavLink to="/reset" /> */}
    </div>
  );
}

export default LoginPage;
