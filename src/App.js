import React from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from './components/Menu';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Tabs } from './components/Tabs';
import { Buttons } from './components/Buttons';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Menu />
      <div className="tabs-divider" />
      <Container>
        <Breadcrumbs />
        <h1>Press Plano con Mancuerna</h1>
        <Tabs />
        <Buttons />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
