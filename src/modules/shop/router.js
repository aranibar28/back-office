import { Categorys, Inventory, Products, Sales } from "./index";

export const shopRouter = [
  {
    path: "/categorias",
    component: <Categorys />,
    private: false,
  },
  {
    path: "/inventario",
    component: <Inventory />,
    private: false,
  },
  {
    path: "/productos",
    component: <Products />,
    private: false,
  },
  {
    path: "/ventas",
    component: <Sales />,
    private: false,
  },
];
