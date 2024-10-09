import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// componentes a usar
import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
// assets a usar
import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.avif";

import prod1 from "./assets/prod1.webp";
import prod2 from "./assets/prod2.webp";
import prod3 from "./assets/prod3.webp";
// estilos a usar
import './styles/ProfileCard.css';
import styles from "./styles/Header.module.css";

function Navbar() {
  return (
  // creamos los link de navegacion con bootstrap y react router dom, si esta activo le pasamos un estilo especifico desde modules
  //gracias a bootstrap el header y el nav son responsive
    <nav className='navbar navbar-expand-lg'>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Ejercicios</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? styles.active : ''}`} 
                to="/"
              >
                Ejercicio 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? styles.active : ''}`} 
                to="/ejercicio2"
              >
                Ejercicio 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? styles.active : ''}`} 
                to="/ejercicio3"
              >
                Ejercicio 3
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    //creamos header con bootstrap y modules
    <Router>
      <header className={styles.header}>
        <h1 className="display-4">Bienvenido a los Ejercicios</h1>
        <p>Este es el header y el nav hechos con Bootstrap y CSS modules</p><p className={styles.nota}>*Ejercicio 4</p>
      </header>
      <Navbar />
      {/* // creamos las respectivas rutas y pasamos los props correspondientes */}
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Ejercicio 1</h1>
            <div className="containers">
              <h1>Style tradicional con className</h1>
              <ProfileCard
                src={profile1}
                name="Sofía Martínez"
                description="Desarrolladora web enfocada en interfaces responsivas y accesibles. Experta en HTML, CSS, y JavaScript, con experiencia en backend con Node.js. Apasionada por el diseño limpio y el código bien estructurado."
              />
              <ProfileCard
                src={profile2}
                name="Javier Torres"
                description="Desarrollador web full-stack con más de 7 años de experiencia en JavaScript. Especialista en crear aplicaciones escalables, con un enfoque en experiencias de usuario eficientes y modernas."
              />
            </div>
          </div>
        } />

        <Route path="/ejercicio2" element={
          <div>
            <h1>Ejercicio 2 Styled component</h1>
            <div className="containers">
              <ProductCard 
                name="MORRAL CARTAGENA PRINT" 
                imageUrl={prod1} 
                price="$249.000 COP" 
                description="Cargaderas ajustables, bolsillo externo con cierre en la parte posterior de fácil acceso. En su interior con bolsillo con cierre, bolsillo portacelular o para accesorios. Elaborado en Cuero Vegano 100% Colombiano." 
              />
              <ProductCard 
                name="MORRAL CARTAGENA VERDE" 
                imageUrl={prod2} 
                price="$249.000 COP" 
                description="Cargaderas ajustables, bolsillo externo con cierre en la parte posterior de fácil acceso. En su interior con bolsillo con cierre, bolsillo portacelular o para accesorios. Elaborado en Cuero Vegano 100% Colombiano." 
              />
              <ProductCard 
                name="MORRAL NEGRO PORTA PC" 
                imageUrl={prod3} 
                price="$299.000 COP" 
                description="Cargaderas ajustables, bolsillo externo con cierre en la parte posterior de fácil acceso. En su interior con bolsillo con cierre, bolsillo portacelular o para accesorios. Elaborado en Cuero Vegano 100% Colombiano." 
              />
            </div>
          </div>
        } />

        <Route path="/ejercicio3" element={
          <div>
            <h1>Ejercicio 3 CSS Modules</h1>
            <div className="containers">
              <Card />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;