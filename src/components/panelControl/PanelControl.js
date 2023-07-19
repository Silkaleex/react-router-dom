import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../App.css";
export const PanelControl = () => {
  return (
    <>
    <section className="enlace-secundario">
      <h1>Este es el panel de control</h1>
      <p className="txt-opciones">Elige una de estas opciones:</p>
      <nav>
        <ul>
          <li className="enlaces-secundarios">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "enlaces")}
              to="/panel/inicio-panel"
            >
              Inicio
            </NavLink>
          </li>
          <li className="enlaces-secundarios">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "enlaces")}
              to="/panel/crear-articulos"
            >
              Crear Articulos
            </NavLink>
          </li>
          <li className="enlaces-secundarios">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "enlaces")}
              to="/panel/gestion-usuarios"
            >
              Gestion de usuarios
            </NavLink>
          </li>
          <li className="enlaces-secundarios">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "enlaces")}
              to="/panel/acerca-de"
            >
              Acerca de
            </NavLink>
          </li>
        </ul>
      </nav>
      </section>
      <div>
        {/* cargo los componentes de las subrutas o de las rutas anidadas */}
        <Outlet />
      </div>
    </>
  );
};
