import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para agregar un usuario
 * @param {FormData} formData Formulario de un usuario
 *
 */


export async function registerApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para loguer a un usuario
 * @param {FormData} formData Formulario de un usuario
 * 
 */

export async function loginApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/local`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para resetear la contraseña de un usuario
 * @param {Email} email Email del usuario
 *  
 */

export async function resetPasswordApi(email) {
  try {
    const url = `${BASE_PATH}/auth/forgot-password`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para obtener un usuario
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Objeto usuario
 */

export async function getMeApi(logout) {
  try {
    const url = `${BASE_PATH}/users/me`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

/**
 * Conexion entre front end y back end para cambiar el nombre del usuario
 * @param {String} idUser ID de usuario
 * @param {String} data Nuevo nombre del usuario
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function updateNameApi(idUser, data, logout) {
  try {
    const url = `${BASE_PATH}/users/${idUser}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para cambiar el mail del usuario
 * @param {String} idUser ID de usuario
 * @param {String} email Nuevo email del usuario
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function updateEmailApi(idUser, email, logout) {
  try {
    const url = `${BASE_PATH}/users/${idUser}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para cambiar la password del usuario
 * @param {String} idUser ID de usuario
 * @param {String} password Password del usuario
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function updatePasswordApi(idUser, password, logout) {
  try {
    const url = `${BASE_PATH}/users/${idUser}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    };
    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
