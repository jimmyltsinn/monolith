import React from 'react';

const style = {
  display: 'table-cell',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
};

const Cell = (props) => {
  let className;
  switch (props.value) {
    case 0: className = "zero"; break;
    case 1: className = "one"; break;
    case 2: className = "two"; break;
    case 3: className = "three"; break;
    case 4: className = "four"; break;
  }
  
  return (
      <div style={style} className={className}>{props.value}</div>
  );
};

Cell.propTypes = {
  value: React.PropTypes.number.isRequired
};

export default Cell;
