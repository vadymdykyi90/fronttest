import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Exercise</Breadcrumb.Item>
      <Breadcrumb.Item>Name</Breadcrumb.Item>
      <Breadcrumb.Item active>Press Plano con Mancuerna</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
export { Breadcrumbs };
