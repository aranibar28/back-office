import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";

export function AuthLogin() {
  const [formState, setFormState] = useState({
    user: "",
    password: "",
    remember: false,
  });

  /*   const onSubmit = (event) => {
    event.preventDefault();
    console.log("Datos:", formState);
  }; */

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <h1 className="m-2">LOGIN</h1>
      <Form
        name="basic"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        /* onSubmit={onSubmit} */
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu usuario.",
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
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu contraseña.",
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
        <div className="flex center">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox
              checked={formState.remember}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  remember: event.target.checked,
                }))
              }
            >
              Recordar
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
