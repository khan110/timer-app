import React from 'react';
import PropTypes from 'prop-types';
import './timerbutton.css';

type Props = {
  buttonAction: () => void;
  buttonValue: string;
  className: any;
};

const TimerButton: React.FC<Props> = ({
  buttonAction,
  buttonValue,
}) => {
  return (
    <div className="button-container" onClick={() => buttonAction()}>
      <p className="button-value">{buttonValue}</p>
    </div>
  );
};

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton