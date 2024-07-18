import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import  Container  from '../../../components/container/Container';
import { Link } from 'react-router-dom';

const { Title , Text } = Typography;


const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Register = () => {
  return (
    <div className=' h-screen flex items-center justify-center '>
      <Container>
        <Form
          
          name="basic"
          layout="vertical"
          
          className='bg-slate-300 p-4 rounded-xl :'
          initialValues={{
            remember: true,
          }}
          style={{ maxWidth: 450, display: "block", margin: "0 auto" ,}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        > 
          <Title level={2} className='text-center'>Register</Title>
          <Form.Item
            style={{marginTop: "60px"}}
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{marginTop: "20px"}}
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your email"!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            style={{marginBottom: "60px"}}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>



          <Form.Item
            className='text-center w-full'
            style={{width: "100%"}}
          >
            <Button className='w-[60%] ' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
            <Text level={2} className='flex justify-center gap-1' >Already have an account? <Link  to="/auth">Login</Link></Text>
        </Form>
      </Container>
    </div>
  )
}

export default Register

