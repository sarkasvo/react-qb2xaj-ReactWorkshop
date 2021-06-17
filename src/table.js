import React from 'react';
import './style.css';
import ButtonComponent from './button';

export default function TableComponent(props) {
  const {
    tableData,
    tableHeading1,
    tableHeading2,
    tableTitle,
    onRemove
  } = props;

  const tableHeader = () => {
    return (
      <thead>
        <tr>
          <th>{tableHeading1}</th>
          <th>{tableHeading2}</th>
          <th>Delete</th>
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    const rows = tableData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.type}</td>
          <td>
            {' '}
            <ButtonComponent clickAction={() => onRemove(index)} />
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };

  return (
    <div>
      <h2>{tableTitle}</h2>
      <table>
        {tableHeader()}
        {tableBody()}
      </table>
    </div>
  );
}
