import "antd/dist/antd.css";
import "./styles/main.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  LaptopOutlined,
  FormOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { RouterMain } from "./router";

/* import { TodoList } from "./todo-list"; */

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export function Container() {
  return (
    <Layout className="wrapper">
      <Header className="header">
        <div>
          <img src="../logo-red.png" alt="logo" className="logox" />
        </div>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]} className="menu">
          <Menu.Item key="1">Salir</Menu.Item>
        </Menu> */}
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Inicio
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
              <Menu.Item key="2">Empleados</Menu.Item>
              <Menu.Item key="3">Trainers</Menu.Item>
              <Menu.Item key="4">Clientes</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Servicios">
              <Menu.Item key="5">Lista</Menu.Item>
              <Menu.Item key="6">Categorías</Menu.Item>
              <Menu.Item key="7">Promociones</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<FormOutlined />} title="Reservas">
              <Menu.Item key="8">Lista</Menu.Item>
              <Menu.Item key="9">Horarios</Menu.Item>
              <Menu.Item key="10">Membresías</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<ShoppingCartOutlined />}
              title="Tienda Virtual"
            >
              <Menu.Item key="11">Categorías</Menu.Item>
              <Menu.Item key="12">Productos</Menu.Item>
              <Menu.Item key="13">Inventario</Menu.Item>
              <Menu.Item key="14">Ventas</Menu.Item>
            </SubMenu>
            <Menu.Item key="15" icon={<BarChartOutlined />}>
              Reportes
            </Menu.Item>
            <Menu.Item key="16" icon={<QuestionCircleOutlined />}>
              Ayuda
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <RouterMain />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
