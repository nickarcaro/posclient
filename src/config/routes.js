//layouts
import HomeLayout from "../layouts/HomeLayout";
import AdminLayout from "../layouts/AdminLayout";

//pages Home
import Home from "../pages/Home/Home";
import Contact from "../pages/Home/Contact";
import AboutUs from "../pages/Home/AboutUs";
import Subscribe from "../pages/Home/Subscribe";

//pages dashboard
import Dashboard from "../pages/Admin/Dashboard";
import Account from "../pages/Admin/Account";
import Categories from "../pages/Admin/Categories";
import Jerarquies from "../pages/Admin/Jerarquies";
import Products from "../pages/Admin/Products";
import Promotions from "../pages/Admin/Promotions";
import Sellers from "../pages/Admin/Sellers";
import Sells from "../pages/Admin/Sells";
import Suppliers from "../pages/Admin/Suppliers";

//rutas de home
export const homeRoutes = [
  {
    path: "/",
    exact: false,
    component: HomeLayout,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contacto",
        component: Contact,
        exact: true,
      },
      {
        path: "/sobre-nosotros",
        component: AboutUs,
        exact: true,
      },
      {
        path: "/suscribete",
        component: Subscribe,
        exact: true,
      },
      {
        component: Home,
      },
    ],
  },
];

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
