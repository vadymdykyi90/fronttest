import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const blocks = {
  difficult: [
    { name: 'Moderate', checked: false },
    { name: 'Schedule', checked: true },
    { name: 'Adjust', checked: true },
  ],
  objective: [
    { name: 'Tone', checked: true },
    { name: 'Addictive', checked: true },
    { name: 'Build', checked: true },
  ],
  blocks: [
    { name: 'Cardio', checked: false },
    { name: 'Fia', checked: true },
    { name: 'Pianchas', checked: true },
    { name: 'Estreches', checked: false },
  ],
  places: [
    { name: 'Gym', checked: false },
    { name: 'Cort', checked: true },
    { name: 'Outdoor', checked: true },
  ]
}

const renderInputs = (inputs) => {
  return (
    <Form>
      {inputs.map((item, index) => {
        return (
          <div key={index} className="input-row">
            <Form.Check
              type="checkbox"
              id={item.name}
              label={item.name}
              checked={item.checked}
            />
          </div>
        );
      })}
    </Form>
  );
}

const Labels = () => {
  return (
    <Container className="labels-container">
      <Row>
        <Col>
          <h4>Difficult level</h4>
          {renderInputs(blocks.difficult)}
        </Col>
        <Col>
          <h4>Objective</h4>
          {renderInputs(blocks.objective)}
        </Col>
        <Col>
          <h4>Blocks</h4>
          {renderInputs(blocks.blocks)}
          <div className="input-row add-family">
            + add family
          </div>
        </Col>
        <Col>
          <h4>Places</h4>
          {renderInputs(blocks.places)}
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Family</h4>
          <div className="family">Family</div>
          <div className="input-row add-family">
            + add family
          </div>
        </Col>
        <Col />
        <Col />
        <Col />
      </Row>
    </Container>
  );
}

export default Labels;
export { Labels };
