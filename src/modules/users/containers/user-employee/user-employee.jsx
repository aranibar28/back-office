import { Button, Tooltip, Popconfirm, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
export function UserEmployee() {
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

  return (
    <div>
      <div className="flex items-center betwwen m-2">
        <h3>Lista de Empleados</h3>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
          Registrar Usuario
        </Button>
      </div>

      <Table columns={columns} rowKey="id"></Table>
    </div>
  );
}
