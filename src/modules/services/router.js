import { ServicesCategory, ServicesList, Promotions } from "./index";

export const servicesRouter = [
  {
    path: "/categorias",
    component: <ServicesCategory />,
    private: false,
  },
  {
    path: "/servicios",
    component: <ServicesList />,
    private: false,
  },
  {
    path: "/promociones",
    component: <Promotions />,
    private: false,
  },
];
