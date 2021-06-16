import React from 'react';
import './style.css';

export default function TableComponent(props) {
  const { tableData } = props;

  const tableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
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
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };

  return (
    // <thead>
    //   <tr>
    //     <th>Pet Name</th>
    //     <th>Pet Type</th>
    //   </tr>
    // </thead>

    <div>
      <table>
        {tableHeader()}
        {tableBody()}
      </table>
    </div>
  );
}
