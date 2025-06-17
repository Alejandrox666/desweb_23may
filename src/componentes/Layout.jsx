import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh' // Ocupa toda la altura de la pantalla
    }}>
      <header style={{ padding: '10px', backgroundColor: '#f13710', color: '#fff' }}>
        <nav>
          <Link to="/">Home ALejandro Hernández</Link> | <Link to="/about">Acerca de</Link>
        </nav>
      </header>

      <div style={{ padding: '20px' }}>
        <h2>Bienvenido a mi página Web</h2>
        <hr />
        <p>
          Esta simple aplicación fue creada con React, por Alejandro Hernández Negrete
        </p>
      </div>

      <main style={{ padding: '20px', flex: '1' }}>
        {/* Este div crece para llenar el espacio disponible */}
        <Outlet />
      </main>

      <footer style={{
        padding: '40px',
        backgroundColor: '#f13710',
        color: '#fff',
        textAlign: 'center'
      }}>
        <p>Derechos Reservados © 2025</p>
      </footer>
    </div>
  );
};

export default Layout;
