import React, { useState } from "react";
//componentes de pagina de auth (es la pagina que se muestra en modal)
import LoginForm from "../../../components/HomeLayout/LoginForm";
import ForgotPass from "../../../components/HomeLayout/ForgotPass";

//pagina del modal de autenticacion
const Auth = ({ onCloseModal, setTitleModal }) => {
  //estado de mostrar formulario de login
  const [showLogin, setShowLogin] = useState(true);
  //al hacer click en botones, añadir titulo al modal y mostrar ese componente

  const showLoginForm = () => {
    setTitleModal("Iniciar sesión");
    setShowLogin(true);
  };
  const showForgotPass = () => {
    setTitleModal("Recuperar Contraseña");
    setShowLogin(false);
  };

  //si login true, loginform, sino passwordrecuperar
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
