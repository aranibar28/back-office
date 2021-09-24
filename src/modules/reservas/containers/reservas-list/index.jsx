import { useState, useEffect } from "react";
import { Form, Button, Tooltip, Popconfirm, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FormContainer } from "./container/form";

export function Reservas() {
  const [data, setData] = useState([]);

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
            title={"Estas seguro que deseas remover el item?"}
            onConfirm={() => {
              confirmRemove(reserva);
            }}
            okText="Yes"
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
  };

  const confirmRemove = async (reserva) => {
    console.log("yes remover", reserva);
    await deleteReserva(reserva);
    const responseReserva = await getReserva();
    setData(responseReserva);
  };

  useEffect(() => {
    getReserva().then((responseReserva) => {
      setData(responseReserva);
    });
  }, []);

  return (
    <div className="reservas">
      <Form labelCol={{ span: 8 }} onFinish={onFinish}>
        {/* Inputs */}
        <FormContainer />
      </Form>
      <Table columns={columns} dataSource={data} rowKey="id"></Table>
    </div>
  );
}
