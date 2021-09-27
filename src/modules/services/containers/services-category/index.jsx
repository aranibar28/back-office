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
const baseUrl = "http://localhost:3005/categories";

export function ServicesCategory() {
  const [data, setData] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const success = async (message) => {
    Modal.success({
      content: message,
    });
  };

  const [category, setCategory] = useState({
    id: "",
    name: "",
    price: "",
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Categoría",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
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
    setCategory(action);
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
    setCategory({ ...category, [name]: value });
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
    delete category.id;
    await axios
      .post(baseUrl, category)
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
      .put(baseUrl + "/" + category.id, category)
      .then(() => {
        const dataAuxiliar = data;
        dataAuxiliar.map((element) => {
          if (element.id === category.id) {
            element.name = category.name;
            element.price = category.price;
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
      .delete(baseUrl + "/" + category.id)
      .then((response) => {
        setData(data.filter((elemento) => elemento.id !== category.id));
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
      <div className="flex text-center betwwen mb-4">
        <h3>Lista de Categorías</h3>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModalAdd}>
          Agregar Categoría
        </Button>
      </div>
      <Table columns={columns} dataSource={data} rowKey="id" />
      <Modal
        visible={modalAdd}
        title="Registrar Categoría"
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
          <Item label="Categoría">
            <Input name="name" onChange={handleChange} />
          </Item>
          <Item label="Price">
            <Input name="price" onChange={handleChange} />
          </Item>
        </Form>
      </Modal>
      <Modal
        visible={modalEdit}
        title="Editar Categoría"
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
          <Item label="Categoría">
            <Input
              name="name"
              onChange={handleChange}
              value={category && category.name}
            />
          </Item>
          <Item label="Precio">
            <Input
              name="price"
              onChange={handleChange}
              value={category && category.price}
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
          <Button type="primary" danger onClick={peticionDelete} key="saved" >
            Sí
          </Button>,
        ]}
      >
        Estás seguro que deseas eliminar la categoría <b>{category && category.name}</b>?
      </Modal>
    </div>
  );
}

