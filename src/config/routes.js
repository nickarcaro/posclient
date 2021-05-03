//layouts
import HomeLayout from "../layouts/HomeLayout";
import PosLayout from "../layouts/PosLayout";
import AdminLayout from "../layouts/AdminLayout";

//pages Home
import Home from "../pages/Home/Home";
import Contact from "../pages/Home/Contact";
import AboutUs from "../pages/Home/AboutUs";

//pages dashboard
import Dashboard from "../pages/Admin/Dashboard";
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
        component: Home,
      },
    ],
  },
];

//rutas de usuarios que son vendedores
export const posRoutes = [];

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
    ],
  },
];
