import React from 'react';
import { Button } from 'react-bootstrap';
import SaveIcon from '../../images/save.svg';

const Buttons = () => {

  return (
    <div className="step-buttons">
      <Button variant="outline-dark" className="btn-save" size="sm">
        <img src={SaveIcon} />
        Save
      </Button>
      <Button variant="outline-dark" size="sm">
        Next Step
      </Button>
    </div>
  );
};

export default Buttons;
export { Buttons };
