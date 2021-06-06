import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

import { getStoreBySlug } from "../../../api/store";

const Dashboard = ({ match }) => {
  const [store, setStore] = useState(undefined);
  const [reloadStores, setReloadStores] = useState(false);
  const { auth, logout } = useAuth();
  const history = useHistory();

  const { namestore } = match.params;

  useEffect(() => {
    (async () => {
      const response = await getStoreBySlug(namestore, logout);
      setStore(response);
      setReloadStores(false);
    })();
  }, [reloadStores, logout, setReloadStores]);

  console.log(store, namestore);
  //if (store === undefined) return null;
  //if ( store[0].slug !== namestore) history.replace("/pos");

  return <div>panel</div>;
};

export default Dashboard;
