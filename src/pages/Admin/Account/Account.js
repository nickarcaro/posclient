import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import ChangePasswordForm from "../../../components/UserLayout/ChangePasswordForm";
import ChangeNameForm from "../../../components/UserLayout/ChangeNameForm";
import ChangeEmailForm from "../../../components/UserLayout/ChangeEmailForm";
const Account = () => {
  const { Content } = Layout;
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth, setUser, logout]);

  if (user === undefined) return null;
  if (!auth && !user) {
    history.replace("/");
    return null;
  }

  return (
    <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#fff" }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Configuration
            user={user}
            logout={logout}
            setReloadUser={setReloadUser}
          />
        </Content>
      </Layout>
    </Content>
  );
};

function Configuration({ user, logout, setReloadUser }) {
  return (
    <div className="account__configuration">
      <h3>Configuración</h3>
      <div className="data">
        <ChangeNameForm
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
        <ChangeEmailForm
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
        <ChangePasswordForm user={user} logout={logout} />
      </div>
    </div>
  );
}

export default Account;
