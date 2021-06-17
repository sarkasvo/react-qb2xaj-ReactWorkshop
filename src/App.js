import React from 'react';
import './style.css';
import HeaderComponent from './header';
import TableComponent from './table';
import ButtonComponent from './button';
import FormAddPet from './formAddPet.js';

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

  // useState hook -- do inputValueName se ted zapise '', a updatuje se pri pouziti funkce setInputValueName
  const [inputValueName, setInputValueName] = React.useState('');
  const [inputValueType, setInputValueType] = React.useState('');

  // deletes the line whed the action is treiggered (in button file the action is defined as onClick)
  function handleRemove(index) {
    const newPetList = pets.filter((pet, i) => i != index);
    setPets(newPetList);
  }

  // for the imput form for the new pet
  // This is another way to create functions.  You can write them as function like above or like below
  const handleAdd = () => {
    const newPet = {
      name: inputValueName,
      type: inputValueType
    };

    const newPets = [...pets, newPet];

    setPets(newPets);
    setInputValueName('');
    setInputValueType('');
  };

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
      <FormAddPet
        inputValueName={inputValueName}
        inputValueType={inputValueType}
        setInputValueName={setInputValueName}
        setInputValueType={setInputValueType}
        handleAdd={handleAdd}
      />
      <ButtonComponent />
    </div>
  );
}
