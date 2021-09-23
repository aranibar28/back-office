import { AuthLogin, AuthRegister } from "./index";

export const authRouter = [
  {
    path: "/login",
    component: <AuthLogin />,
    private: false,
  },
  {
    path: "/register",
    component: <AuthRegister />,
    private: false,
  },
];
