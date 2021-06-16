import React from 'react';
import './style.css';

import HeaderComponent from './HeaderComponent';
import TableComponent from './TableComponent';
import ButtonComponent from './ButtonComponent';

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <HeaderComponent />
      <TableComponent />
      <ButtonComponent />
    </div>
  );
}
