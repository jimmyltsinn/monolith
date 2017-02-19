import React from 'react';
import AnimateOnChange from 'react-animate-on-change';

const cellStyle = {
  display: 'table-cell',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
};

class Cell extends React.Component {
  getBackgroundColor(value) {
    switch (value) {
      case 0: return 'black';
      case 1: return 'lightgrey';
      case 2: return 'pink';
      case 3: return 'orange';
      case 4: return 'lightblue';
      default: return '';
    }
  }

  render() {
    let className = ['cell'];
    const style = Object.assign({}, cellStyle, {
      background: this.getBackgroundColor(this.props.value)
    });

    if (this.props.hitable) className.push('hitable');

    return (
      <AnimateOnChange
        baseClassName="cell"
        animationClassName="cellchange"
        animate={true}>
      <div
        style={style}
        key={`cell-${this.props.x}-${this.props.y}`}
        className={className.join(' ')}
        onClick={this.props.onClick}>
        {this.props.value}
      </div>
    </AnimateOnChange>
    );
  }
}

Cell.propTypes = {
  value: React.PropTypes.number.isRequired,
  hitable: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

export default Cell;
