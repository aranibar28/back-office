import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  LaptopOutlined,
  FormOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { RouterMain } from "router";
import { HeaderContainer } from "components/header";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export function BackOffice() {
  return (
    <Router>
      <Layout className="wrapper">
        <Header>
          <HeaderContainer />
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
                <Link to="/">Home</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
                <Menu.Item key="2">
                  <Link to="/trainers">Trainers</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/clientes">Clientes</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Servicios">
                <Menu.Item key="4">
                  <Link to="/categorias">Categorías</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/promociones">Promociones</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<FormOutlined />} title="Suscripciones">
                <Menu.Item key="6">
                  <Link to="/membresias">Membresías</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/reservas">Reservas</Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/horarios">Horarios</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                icon={<ShoppingCartOutlined />}
                title="Tienda Virtual"
              >
                <Menu.Item key="9">
                  <Link to="/shop-categorys">Categorias</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/shop-products">Productos</Link>
                </Menu.Item>
                <Menu.Item key="11">
                  <Link to="/shop-inventory">Inventario</Link>
                </Menu.Item>
                <Menu.Item key="12">
                  <Link to="/shop-sales">Ventas</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="13" icon={<BarChartOutlined />}>
                Reportes
              </Menu.Item>
              <Menu.Item key="14" icon={<QuestionCircleOutlined />}>
                Ayuda
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 5px" }}>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <Content className="content site-layout-background">
              <RouterMain />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}
