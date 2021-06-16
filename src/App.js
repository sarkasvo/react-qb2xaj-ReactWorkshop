import React from 'react';
import './style.css';

import HeaderComponent from './header';
import TableComponent from './table';
import ButtonComponent from './button';

export default function App() {
  const pets = [
    {
      name: 'Chico',
      type: 'dog'
    },
    {
      name: 'Felix',
      type: 'cat'
    },
    {
      name: 'Betty',
      type: 'chicken'
    },
    {
      name: 'Chango',
      type: 'monkey'
    }
  ];

  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <HeaderComponent />
      <TableComponent tableData={pets} />
      <ButtonComponent />
    </div>
  );
}
