import { useEffect, useState } from "react";
import { Table, Button, Modal, Input, Form } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Item } = Form;
const baseUrl = "http://localhost:3005/clients";

export function UserClient() {
  const [data, setData] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const success = async (message) => {
    Modal.success({
      content: message,
    });
  };

  const [user, setUser] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    dni: "",
    phone: "",
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
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
      title: "Acciones",
      key: "actions",
      render: (fila) => (
        <>
          <Button
            type="primary"
            onClick={() => selectAction(fila, "Editar")}
            key="edit"
            shape="circle"
            icon={<EditOutlined />}
          ></Button>{" "}
          <Button
            type="danger"
            onClick={() => selectAction(fila, "Eliminar")}
            key="delete"
            shape="circle"
            icon={<DeleteOutlined />}
          ></Button>
        </>
      ),
    },
  ];

  const selectAction = (action, caso) => {
    setUser(action);
    caso === "Editar" ? showModalEdit() : showModalDelete();
  };

  const showModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const showModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const showModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPost = async () => {
    delete user.id;
    await axios
      .post(baseUrl, user)
      .then((response) => {
        setData(data.concat(response.data));
        showModalAdd();
        success("¡Los datos han sido guardado correctamente!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async () => {
    await axios
      .put(baseUrl + "/" + user.id, user)
      .then(() => {
        const dataAuxiliar = data;
        dataAuxiliar.map((element) => {
          if (element.id === user.id) {
            element.name = user.name;
            element.lastname = user.lastname;
            element.email = user.email;
            element.phone = user.password;
            element.phone = user.dni;
            element.phone = user.phone;
          }
          return null;
        });
        setData(dataAuxiliar);
        showModalEdit();
        success("¡Los datos han sido modificado correctamente!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionDelete = async () => {
    await axios
      .delete(baseUrl + "/" + user.id)
      .then((response) => {
        setData(data.filter((elemento) => elemento.id !== user.id));
        showModalDelete();
        success("¡Los datos han sido removido correctamente!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div>
      <div className="flex text-center between mb-4">
        <h3>Lista de Clientes</h3>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModalAdd}>
          Agregar Cliente
        </Button>
      </div>
      <Table columns={columns} dataSource={data} rowKey="id" />
      <Modal
        visible={modalAdd}
        title="Registrar Cliente"
        destroyOnClose={true}
        onCancel={showModalAdd}
        centered
        footer={[
          <Button onClick={showModalAdd} key="closed">
            Cancelar
          </Button>,
          <Button
            onClick={peticionPost}
            icon={<SaveOutlined />}
            type="primary"
            key="saved"
          >
            Guardar
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 5 }}>
          <Item label="Nombre">
            <Input
              name="name"
              onChange={handleChange}
              placeholder="Ingrese nombre"
            />
          </Item>
          <Item label="Apelido">
            <Input
              name="lastname"
              onChange={handleChange}
              placeholder="Ingrese apellido"
            />
          </Item>
          <Item label="Email">
            <Input
              name="email"
              onChange={handleChange}
              placeholder="Ingrese e-mail"
            />
          </Item>
          <Item label="Password">
            <Input.Password
              name="password"
              onChange={handleChange}
              placeholder="Ingrese nombre"
            />
          </Item>
          <Item label="DNI">
            <Input
              name="dni"
              onChange={handleChange}
              placeholder="Ingresae DNI"
            />
          </Item>
          <Item label="Telefono">
            <Input
              name="phone"
              onChange={handleChange}
              placeholder="Ingresae teléfono"
            />
          </Item>
        </Form>
      </Modal>
      <Modal
        visible={modalEdit}
        title="Registrar Cliente"
        onCancel={showModalEdit}
        centered
        footer={[
          <Button onClick={showModalEdit} key="closed">
            Cancelar
          </Button>,
          <Button
            onClick={peticionPut}
            key="saved"
            type="primary"
            icon={<SaveOutlined />}
          >
            Guardar
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 5 }}>
          <Item label="Nombre">
            <Input
              name="name"
              onChange={handleChange}
              value={user && user.name}
            />
          </Item>
          <Item label="Apelido">
            <Input
              name="lastname"
              onChange={handleChange}
              value={user && user.lastname}
            />
          </Item>
          <Item label="Email">
            <Input
              name="email"
              onChange={handleChange}
              value={user && user.email}
            />
          </Item>
          <Item label="Password">
            <Input.Password
              name="password"
              onChange={handleChange}
              value={user && user.password}
            />
          </Item>
          <Item label="DNI">
            <Input
              name="dni"
              onChange={handleChange}
              value={user && user.dni}
            />
          </Item>
          <Item label="Telefono">
            <Input
              name="phone"
              onChange={handleChange}
              value={user && user.phone}
            />
          </Item>
        </Form>
      </Modal>

      <Modal
        visible={modalDelete}
        onCancel={showModalDelete}
        centered
        footer={[
          <Button onClick={showModalDelete} key="closed">
            No
          </Button>,
          <Button type="primary" danger onClick={peticionDelete} key="saved">
            Sí
          </Button>,
        ]}
      >
        Estás seguro que deseas eliminar al usuario <b>{user && user.name}</b>?
      </Modal>
    </div>
  );
}
