import React from 'react';
import './style.css';

export default function ButtonComponent(props) {
  const { clickAction } = props;

  return (
    <div>
      <p className={'button'} onClick={clickAction}>
        Button
      </p>
    </div>
  );
}
