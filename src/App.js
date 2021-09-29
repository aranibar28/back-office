import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
/* import { BackOffice } from "components/layout/back-office"; */
import { AuthLogin } from "modules/auth/containers/auth-login/auth-login";
/* import { AuthRegister } from "modules/auth/containers/auth-register/auth-register"; */
import { Footer } from "components/footer/index";

const { Header, Content } = Layout;
export function App() {
  return (
    <Router>
      <Layout className="wrapper text-center">
        <Header className="header-container">
          <div>
            <Link to="/">
              <img src="../logo-red.png" alt="logo" className="logo" />
            </Link>
          </div>
          <nav className="nav">
            <ul className="ul">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/paginas">Páginas</Link>
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
              <li>
                <Link to="/trainers">Trainers</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <div>Inicio</div>
            </Route>
            <Route path="/paginas">
              <div>Páginas</div>
            </Route>
            <Route path="/servicios">
              <div>Servicios</div>
            </Route>
            <Route path="/trainers">
              <div>Trainers</div>
            </Route>
            <Route path="/contacto">
              <div>Contacto</div>
            </Route>
            <Route path="/login">
              <AuthLogin />
            </Route>
          </Switch>
        </Content>
        <Footer>Todos los derechos reservados</Footer>
      </Layout>
    </Router>
  );
}
