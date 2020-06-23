import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { Dispatch, AnyAction } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import loginActions from '../../reducers/login';

const LoginContainer = () => {
	const dispatch = useDispatch();
	//   const redux = useSelector(state  => state);
	return (
		<Col style={{ marginTop: '200px' }} span={12} offset={8}>
			<Form className="login-form" style={{ width: '400px' }}>
				<Form.Item>
					<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
				</Form.Item>
				<Form.Item>
					<Input
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Checkbox>Remember me</Checkbox>
					<Row>
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Row>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
						onClick={() => {
							dispatch(
								loginActions.loginRequest({ email: 'asad@gmail.com', password: 'Admin0000' })
							);
						}}
					>
						Log in
					</Button>
					{/* Or <a href="">register now!</a> */}
				</Form.Item>
			</Form>
		</Col>
	);
};

export default LoginContainer;
