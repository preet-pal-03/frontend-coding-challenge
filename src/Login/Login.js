import { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import AuthApi from '../AuthApi';
import Cookies from 'js-cookie';

const Login = () => {
    const Auth = useContext(AuthApi)
    const onFinish = (values) => {
        Auth.setAuth(true)
        Cookies.set("user", "loginTrue")
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const validateEmail = (rule, value, callback) => {
        if (value && value !== "test@gmail.com") {
            callback("Error! email should be test@gmail.com");
        } else {
            callback();
        }
    };
    return (
        <div style={{ background: '#f5f5f5', height: '100vh' }}>
            <Form

                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{
                    padding: '300px',
                }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        { validator: validateEmail }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/^(?=.*[a-z])(?=.*\d)(?=.*[@-])[a-z\d@-]{6,}$/i),
                            message: 'Please input password in correct format!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;