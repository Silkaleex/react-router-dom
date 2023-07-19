import React from "react";
import '../../App.css'
import { Routes, Route, NavLink, Navigate,Link } from "react-router-dom";

import { Inicio } from "../inicio/Inicio";
import { Articulos } from "../articulo/Articulos";
import { Contacto } from "../contacto/Contacto";
import { Persona } from "../persona/Persona";
import { Error } from "../error/Error";
import { PanelControl } from "../panelControl/PanelControl";

import { InicioPanel } from "../panel/InicioPanel";
import { Crear } from "../panel/Crear";
import { Gestion } from "../panel/Gestion";
import { Acerca } from "../panel/Acerca";

import { AiFillBackward } from "react-icons/ai";
import { AiFillForward } from "react-icons/ai";

export const RouterPrincipal = () => {
  return (
    <>
      <h1 className="cabecera"><AiFillForward className="icono-flecha"/> Aprendiendo a usar React-Router-Dom <AiFillBackward className="icono-flecha"/></h1>
      <br />
      <section className="enlaces-principales">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li className="enlace-principal">
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "activado" : "enlace")}
            >
              Inicio
            </NavLink>
          </li>
          <li className="enlace-principal">
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "activado" : "enlace")}
           
            >
              Articulos
            </NavLink>
          </li>
          <li className="enlace-principal">
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activado" : "enlace")}
            >
              Contacto
            </NavLink>
          </li>
          <li className="enlace-principal">
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? "activado" : "enlace")}
            >
              Panel de Control
            </NavLink>
          </li>
        </ul>
      </nav>
      </section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path={"/persona/:nombre/:apellido"} element={<Persona />} />
        <Route path={"/persona/:nombre"} element={<Persona />} />
        <Route path={"/persona"} element={<Persona />} />
        <Route
          path={"/redirigir"}
          element={<Navigate to="/persona/alejandro/pascual" />}
        />

        <Route path={"/panel/*"} element={<PanelControl />}>
          <Route index element={<InicioPanel />} />
          <Route path="inicio-panel" element={<InicioPanel />} />
          <Route path="crear-articulos" element={<Crear />} />
          <Route path="gestion-usuarios" element={<Gestion />} />
          <Route path="acerca-de" element={<Acerca />} />
        </Route>
        {/*index pone un elemento por defecto,
           como principal al inciar un componente 
           en este caso es iniciopanel */}
        <Route path="*" element={<Error />} />
      </Routes>
      <footer className="pie-de-pagina"> &copy; Mas Informacion - <Link target={"_blank"} className="enlace-github" to="https://github.com/Silkaleex">Alejandro Pascual</Link></footer>
    </>
  );
};
