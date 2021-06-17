import React from 'react';
import './style.css';

import HeaderComponent from './header';
import TableComponent from './table';
import ButtonComponent from './button';

export default function App() {
  const initialPetList = [
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

  const heading1 = 'Name';
  const heading2 = 'Type';
  const title = 'My pets';

  const [pets, setPets] = React.useState(initialPetList);

  // deletes the line whed the action is treiggered (in button file the action is defined as onClick)
  function handleRemove(index) {
    const newPetList = pets.filter((pet, i) => i != index);
    setPets(newPetList);
  }

  return (
    <div>
      <HeaderComponent />
      <TableComponent
        tableData={pets}
        tableHeading1={heading1}
        tableHeading2={heading2}
        tableTitle={title}
        onRemove={handleRemove}
      />
      <ButtonComponent />
    </div>
  );
}
