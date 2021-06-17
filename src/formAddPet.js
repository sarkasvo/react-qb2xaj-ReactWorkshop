import * as React from 'react';
import Button from './button.js';

// Below we are destructuring the props vs. explicity listing them through a variable
export default function FormAddPet({
  handleAdd,
  inputValueName,
  setInputValueName,
  inputValueType,
  setInputValueType
}) {
  return (
    <div>
      <h3>Add a New Pet</h3>
      <div>
        <label htmlFor="inputValueName">Pet Name:</label>
        <input
          id="inputValueName"
          type="text"
          onChange={event => setInputValueName(event.target.value)}
          value={inputValueName}
          placeholder="Add a pet name"
        />
        <br />
        <label htmlFor="inputValueType">Pet Type:</label>
        <input
          id="inputValueType"
          type="text"
          onChange={event => setInputValueType(event.target.value)}
          value={inputValueType}
          placeholder="Add a pet type"
        />
      </div>
      <br />
      <Button clickAction={() => handleAdd()} />
    </div>
  );
}
