import { Reservas, Membership, Schedule } from "./index";

export const reservasRouter = [
  {
    path: "/reservas",
    component: <Reservas />,
    private: false,
  },
  {
    path: "/membresias",
    component: <Membership />,
    private: false,
  },
  {
    path: "/horarios",
    component: <Schedule />,
    private: false,
  },
];
