import React from "react";
// import cn from 'classnames';
// import PropTypes from 'prop-types';

class Progress extends React.Component{
  render() {
    const {percentage} = this.props;
    const style = {
      height: '1rem',
      width: percentage + '%',
      backgroundColor: 'blue',
      borderRadius: '3px',
      textAlign: 'center',
      color: 'white'
    };

    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"
             aria-label="progressbar" style={style}>{percentage}%
        </div>
      </div>
    );
  }
}

export default Progress;
