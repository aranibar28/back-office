import { Categorys, Inventory, Products, Sales } from "./index";

export const shopRouter = [
  {
    path: "/shop-categorys",
    component: <Categorys />,
    private: false,
  },
  {
    path: "/shop-inventory",
    component: <Inventory />,
    private: false,
  },
  {
    path: "/shop-products",
    component: <Products />,
    private: false,
  },
  {
    path: "/shop-sales",
    component: <Sales />,
    private: false,
  },
];
