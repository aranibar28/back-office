import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authRouter } from "modules/auth";
import { userRouter } from "modules/users";
import { shopRouter } from "modules/shop";
import { servicesRouter } from "modules/services";
import { reservasRouter } from "modules/reservas";

export function RouterMain() {
  const routesMain = [
    ...authRouter,
    ...userRouter,
    ...shopRouter,
    ...servicesRouter,
    ...reservasRouter,
  ];

  return (
    <Router>
      <Switch>
        {routesMain.map((router, id) => (
          <Route key={id} path={router.path} render={() => router.component} />
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
