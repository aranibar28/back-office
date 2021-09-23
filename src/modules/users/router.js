import { UserClient, UserTrainer } from "./index";

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
];
