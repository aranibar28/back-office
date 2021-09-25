import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Input,
  Tooltip,
  Popconfirm,
  Table,
  DatePicker,
  Modal,
} from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
/* import { FormContainer } from "./container/form"; */

export function Reservas() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const { RangePicker } = DatePicker;

  const showModal = async () => {
    setVisible(!visible);
  };

  const success = async () => {
    Modal.success({
      content: "¡Los datos ha sido enviado correctamente!",
    });
  };

  const columns = [
    {
      title: "Código",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Reserva",
      dataIndex: "reserva",
      key: "reserva",
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
      render: (a, reserva) => (
        <Tooltip>
          <Popconfirm
            placement="topLeft"
            title={"Estas seguro que deseas editar el item?"}
            onConfirm={() => {
              confirmRemove(reserva);
            }}
            okText="Si"
            cancelText="No"
          >
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Popconfirm>{" "}
          <Popconfirm
            placement="topLeft"
            title={"Estas seguro que deseas remover el item?"}
            onConfirm={() => {
              confirmRemove(reserva);
            }}
            okText="Si"
            cancelText="No"
          >
            <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Tooltip>
      ),
    },
  ];

  const getReserva = async () => {
    try {
      const response = await fetch("http://localhost:3005/reservas");
      return response.json();
    } catch (error) {
      alert("No se pudo obtener los datos, intenta nuevamente");
    }
  };

  const addReserva = async (reserva) => {
    try {
      await fetch("http://localhost:3005/reservas", {
        method: "POST",
        body: JSON.stringify(reserva),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      alert("No se pudo registrar intente denuevo");
    }
  };

  const deleteReserva = async (reserva) => {
    try {
      await fetch(`http://localhost:3005/reservas/${reserva.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      alert("no se pudo obtener los datos, intenta nuevamente");
    }
  };

  const onFinish = async (fieldsValue) => {
    const {
      reserva,
      date: [init, finish],
    } = fieldsValue;
    await addReserva({
      reserva,
      init: init.format("DD/MM/YYYY"),
      finish: finish.format("DD/MM/YYYY"),
    });
    const responseReserva = await getReserva();
    setData(responseReserva);
    showModal();
    success();
  };

  const confirmRemove = async (reserva) => {
    await deleteReserva(reserva);
    const responseReserva = await getReserva();
    setData(responseReserva);
    success();
  };

  useEffect(() => {
    getReserva().then((responseReserva) => {
      setData(responseReserva);
    });
  }, []);

  return (
    <div className="reservas">
      <div className="flex text-center betwwen mb-4">
        <h3>Lista de Reservas</h3>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Agregar Reserva
        </Button>
      </div>
      <Table columns={columns} dataSource={data} rowKey="id"></Table>
      <Modal
        visible={visible}
        title="Agregar Reserva"
        destroyOnClose={true}
        onCancel={showModal}
        centered
        footer={[
          <Button onClick={showModal} key="close">
            Cerrar
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 4 }} onFinish={onFinish}>
          <div className=" mt-0 text-center">
            <Form.Item
              label="Reserva"
              name="reserva"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el tema",
                },
              ]}
            >
              <Input placeholder="Ingresa reserva" className="full-width" />
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
      </Modal>
    </div>
  );
}
