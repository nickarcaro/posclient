import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CPRoutes as routes, adminRoutes } from "./routes";
import { map } from "lodash";
import useAuth from "../hooks/useAuth";

export default function Navigation() {
  const { auth } = useAuth();
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
