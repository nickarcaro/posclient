import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { map } from "lodash";
import routes from "./routes";

//sistema de navegación (ciclo for), renderiza el layout y su componente(pagina), esto se ve como {children}

export default function Navigation() {
  return (
    <Router>
      <Switch>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.layout>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}
