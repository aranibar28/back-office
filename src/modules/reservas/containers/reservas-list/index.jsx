import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Tooltip,
  Popconfirm,
  Table,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

export function Reservas() {
  const [tareas, setTodo] = useState([]);

  const columns = [
    {
      title: "Tarea",
      dataIndex: "tarea",
      key: "tarea",
    },
    {
      title: "Inicio",
      dataIndex: "init",
      key: "init",
    },
    {
      title: "Final",
      dataIndex: "finish",
      key: "finish",
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
    },
  ];

  /* const data = [{}]; */

  const addTodo = async (todo) => {
    try {
      await fetch("http://localhost:3005/todo", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log("err", err);
      alert("no se pudo registrar intente denuevo");
    }
  };

  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:3005/todo");
      return response.json();
    } catch (err) {
      alert("no se pudo obtener los datos, intenta nuevamente");
    }
  };

  const deleteTodo = async (todo) => {
    try {
      await fetch(`http://localhost:3005/todo/${todo.id}`, {
        method: "DELETE",
      });
    } catch (err) {
      alert("no se pudo obtener los datos, intenta nuevamente");
    }
  };

  const onFinish = async (fieldsValue) => {
    const {
      tarea,
      date: [init, finish],
    } = fieldsValue;

    await addTodo({
      tarea,
      init: init.format("L"),
      finish: finish.format("L"),
    });
    const responseTodo = await getTodo();
    setTodo(responseTodo);
  };

  const onFinishFailed = (err) => {
    console.log("err", err);
  };

  const confirmRemove = async (todo) => {
    console.log("yes remover", todo);
    await deleteTodo(todo);
    const responseTodo = await getTodo();
    setTodo(responseTodo);
  };

  useEffect(() => {
    getTodo().then((responseTodo) => {
      setTodo(responseTodo);
    });
  }, []);

  return (
    <div className="todo-list">
      <div className="flex item-center">
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
        >
          <div className="flex">
            <Form.Item
              label="Tarea"
              name="tarea"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el tema",
                },
              ]}
            >
              <Input placeholder="Ingresa tarea" className="mr-4 full-width" />
            </Form.Item>
            <Form.Item
              label="Fecha"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el rango de fecha",
                },
              ]}
            >
              <RangePicker className="full-width" />
            </Form.Item>
            <Button className="ml-4" type="primary" htmlType="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </div>

      <Table columns={columns} dataSource={tareas}></Table>

      {tareas.map((tarea, id) => (
        <ul key={id} className="flex list items-center">
          <li>{tarea.tarea}</li>
          <li className="m-2">{tarea.init}</li>
          <li className="m-2">{tarea.finish}</li>
          <li className="m-2">
            <Tooltip title="Eliminar">
              <Popconfirm
                placement="topLeft"
                title={"Estas seguro que deseas remover el item?"}
                onConfirm={() => {
                  confirmRemove(tarea);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  type="danger"
                  shape="circle"
                  icon={<DeleteOutlined />}
                />
              </Popconfirm>
            </Tooltip>
          </li>
        </ul>
      ))}
    </div>
  );
}
