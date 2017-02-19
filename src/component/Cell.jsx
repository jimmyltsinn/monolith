import React from 'react';

const style = {
  display: 'table-cell',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
};

const Cell = (props) => {
  let className = ['cell'];
  switch (props.value) {
    case 0: className.push('zero'); break;
    case 1: className.push('one'); break;
    case 2: className.push('two'); break;
    case 3: className.push('three'); break;
    case 4: className.push('four'); break;
  }

  if (props.hitable) className.push('hitable');

  return (
    <div
      style={style}
      key={`cell-${props.x}-${props.y}`}
      className={className.join(' ')}
      onClick={props.onClick}>
      {props.value}
    </div>
  );
};

Cell.propTypes = {
  value: React.PropTypes.number.isRequired,
  hitable: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

export default Cell;
