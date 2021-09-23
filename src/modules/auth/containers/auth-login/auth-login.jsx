import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";

export function AuthLogin() {
  const [formState, setFormState] = useState({
    user: "",
    password: "",
    remember: false,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Datos:", formState);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // ACA LLAMARAN SERVICIOS
  }, []);

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onSubmit={onSubmit}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          value={formState.user}
          onChange={(event) =>
            setFormState((state) => ({
              ...state,
              user: event.target.value,
            }))
          }
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          value={formState.password}
          onChange={(event) =>
            setFormState((state) => ({
              ...state,
              password: event.target.value,
            }))
          }
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox
          checked={formState.remember}
          onChange={(event) =>
            setFormState((state) => ({
              ...state,
              remember: event.target.checked,
            }))
          }
        >
          Remember me
        </Checkbox>
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
  );
}
