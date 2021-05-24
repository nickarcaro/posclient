//layouts
import HomeLayout from "../layouts/HomeLayout";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
//pages Home
import Home from "../pages/Home/Home";
import Contact from "../pages/Home/Contact";
import AboutUs from "../pages/Home/AboutUs";
import Subscribe from "../pages/Home/Subscribe";

// user pages (usuario ya logueado, pero que no ha elegido almacen para ver)
import Account from "../pages/Admin/Account";
import Stores from "../pages/Admin/Stores";
//pages dashboard
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import Jerarquies from "../pages/Admin/Jerarquies";
import Products from "../pages/Admin/Products";
import Promotions from "../pages/Admin/Promotions";
import Sellers from "../pages/Admin/Sellers";
import Sells from "../pages/Admin/Sells";
import Suppliers from "../pages/Admin/Suppliers";

//sistema de rutas del pos (array de objetos con path, layout padre, pagina hija y si la ruta del path es exacta)
const routes = [
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
    path: "/pos",
    layout: UserLayout,
    component: Stores,
    exact: true,
  },
  {
    path: "/pos/mi-cuenta",
    layout: UserLayout,
    component: Account,
    exact: true,
  },
  {
    path: "/pos/:store/vendedores",
    layout: AdminLayout,
    component: Sellers,
    exact: true,
  },
  {
    path: "/pos/:store/productos",
    layout: AdminLayout,
    component: Products,
    exact: true,
  },
  {
    path: "/pos/:store",
    layout: AdminLayout,
    component: Dashboard,
    exact: true,
  },
  {
    path: "/pos/:store/proveedores",
    layout: AdminLayout,
    component: Suppliers,
    exact: true,
  },
  {
    path: "/pos/:store/categorias",
    layout: AdminLayout,
    component: Categories,
    exact: true,
  },
  {
    path: "/pos/:store/ventas",
    layout: AdminLayout,
    component: Sells,
    exact: true,
  },
  {
    path: "/pos/:store/jerarquias",
    layout: AdminLayout,
    component: Jerarquies,
    exact: true,
  },
  {
    path: "/pos/:store/promociones",
    layout: AdminLayout,
    component: Promotions,
    exact: true,
  },
  {
    layout: HomeLayout,
    component: Home,
  },
];

export default routes;
