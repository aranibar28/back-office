import { useState } from "react";
import { Form, Button, Tooltip, Popconfirm, Table, Modal } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

export function UserClient() {
  const columns = [
    {
      title: "Nombres",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellidos",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "Teléfono",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ingreso",
      dataIndex: "entry",
      key: "entry",
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      render: (a, tarea) => (
        <Tooltip title="Eliminar">
          <Popconfirm
            placement="topLeft"
            title={"Estas seguro que deseas remover el item?"}
            onConfirm={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" shape="circle" icon={<PlusOutlined />} />
          </Popconfirm>
        </Tooltip>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className="flex items-center betwwen m-2">
        <h3>Lista de Clientes</h3>
        <Modal
          title="Agregar Clientes"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="m-2">
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input
                placeholder="Ingresar nombre"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </div>
          <div className="m-2">
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input
                placeholder="Ingresar nombre"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </div>
          <div className="m-2">
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input
                placeholder="Ingresar nombre"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </div>
          <div className="m-2">
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input
                placeholder="Ingresar nombre"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </div>
        </Modal>
        <Button
          type="primary"
          htmlType="submit"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Agregar Clientes
        </Button>
      </div>

      <Table columns={columns} rowKey="id"></Table>
    </div>
  );
}
