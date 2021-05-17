import React, { useState } from "react";
import LoginForm from "../../../components/HomeLayout/LoginForm";
import ForgotPass from "../../../components/HomeLayout/ForgotPass";

//pagina del modal de autenticacion
const Auth = ({ onCloseModal, setTitleModal }) => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Iniciar sesión");
    setShowLogin(true);
  };
  const showForgotPass = () => {
    setTitleModal("Recuperar Contraseña");
    setShowLogin(false);
  };
  return (
    <>
      {showLogin ? (
        <LoginForm
          showForgotPass={showForgotPass}
          onCloseModal={onCloseModal}
        />
      ) : (
        <ForgotPass showLoginForm={showLoginForm} onCloseModal={onCloseModal} />
      )}
    </>
  );
};

export default Auth;
