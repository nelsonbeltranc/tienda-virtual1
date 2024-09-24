import React from 'react';
import Navigation from './Navigation'; // Asegúrate de que la ruta sea correcta

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>© 2024 Mi Tienda Virtual</footer>
    </div>
  );
}

export default Layout;