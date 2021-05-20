import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { map } from "lodash";
//rutas privadas de cuando el usuario ya está autenticado
const AuthRoutes = ({ route, ...props }) => {
  const { auth } = useAuth();

  return (
    <Route
      {...props}
      render={(props) =>
        !auth ? (
          <Redirect to="/" />
        ) : (
          <route.layout>
            <route.component {...props} />
          </route.layout>
        )
      }
    />
  );
};

export default AuthRoutes;
