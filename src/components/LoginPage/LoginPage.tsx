import React from 'react';
import './LoginPage.less'
import { Form, Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import {  UserOutlined, LockOutlined  } from '@ant-design/icons';

const LoginPage: React.FC = () => {

  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-page">
      <div className="login-page__window">
        <img src="/logo.svg" alt="logo" />
        <h2 className="login-page__title">Вход в личный офис</h2>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите имя пользователя!',
            },
          ]}
        >
          <Input className="login-form__input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите пароль!',
            },
          ]}
        >
          <Input
            className="login-form__input"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form__button">
            Войти
          </Button>
        </Form.Item>
      </Form>
      <div className="login-form__links">
        <NavLink className="login-form__navlink" to="/registration"> Регистрация </NavLink>
        <NavLink className="login-form__navlink" to="/reset"> Забыли пароль? </NavLink>
      </div>
      <div className="login-page__circle1"/>
      <div className="login-page__circle2"/>
      </div>
    </div>
  );
}

export default LoginPage;
