//layouts
import HomeLayout from "../layouts/HomeLayout";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
//pages Home
import Home from "../pages/Home/Home";
import Contact from "../pages/Home/Contact";
import AboutUs from "../pages/Home/AboutUs";
import Subscribe from "../pages/Home/Subscribe";

// user pages
import Account from "../pages/Admin/Account";
//pages dashboard
import Dashboard from "../pages/Admin/Dashboard";

import Categories from "../pages/Admin/Categories";
import Jerarquies from "../pages/Admin/Jerarquies";
import Products from "../pages/Admin/Products";
import Promotions from "../pages/Admin/Promotions";
import Sellers from "../pages/Admin/Sellers";
import Sells from "../pages/Admin/Sells";
import Suppliers from "../pages/Admin/Suppliers";

//comercial portal routes
export const CPRoutes = [
  {
    path: "/",
    layout: HomeLayout,
    component: Home,
    exact: true,
  },
  {
    path: "/contacto",
    layout: HomeLayout,
    component: Contact,
    exact: true,
  },
  {
    path: "/sobre-nosotros",
    layout: HomeLayout,
    component: AboutUs,
    exact: true,
  },
  {
    path: "/suscribete",
    layout: HomeLayout,
    component: Subscribe,
    exact: true,
  },
  {
    layout: HomeLayout,
    component: Home,
  },
];

export const adminRoutes = [];
/*
//rutas de usuario administrador (dueño de local)
export const adminRoutes = [
  {
    path: "/",
    exact: false,
    component: AdminLayout,
    routes: [
      {
        path: "/",
        component: Dashboard,
        exact: true,
      },
      {
        path: "/mi-cuenta",
        component: Account,
        exact: true,
      },
      {
        path: "/proveedores",
        component: Suppliers,
        exact: true,
      },
      {
        path: "/categorias",
        component: Categories,
        exact: true,
      },
      {
        path: "/jerarquias",
        component: Jerarquies,
        exact: true,
      },
      {
        path: "/productos",
        component: Products,
        exact: true,
      },
      {
        path: "/promociones",
        component: Promotions,
        exact: true,
      },
      {
        path: "/vendedores",
        component: Sellers,
        exact: true,
      },
      {
        path: "/ventas",
        component: Sells,
        exact: true,
      },
    ],
  },
];

 */
