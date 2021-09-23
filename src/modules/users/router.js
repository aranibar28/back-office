import { UserClient, UserTrainer, UserEmployee } from "./index";

export const userRouter = [
  {
    path: "/clientes",
    component: <UserClient />,
    private: false,
  },
  {
    path: "/trainers",
    component: <UserTrainer />,
    private: false,
  },
  {
    path: "/empleados",
    component: <UserEmployee />,
    private: false,
  },
];
