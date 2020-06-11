import React, { useState, useCallback } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { Labels } from '../Labels';

const Tabs = () => {

  const [currentTab, setCurrentTab] = useState('description');

  const onSelect = useCallback((tab) => {
    console.log('Tabs.js,  [10]: ', { tab });
    setCurrentTab(tab);
  }, [setCurrentTab]);

  return (
    <Tab.Container id="tabs" defaultActiveKey="description">
      <Row className="tabs-header">
        <Col>
          <Nav.Item>
            <Nav.Link
              eventKey="description"
              active={currentTab === 'description'}
              onSelect={onSelect}
            >
              Description
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item>
            <Nav.Link
              eventKey="labels"
              onSelect={onSelect}
              active={currentTab === 'labels'}
            >
              Labels
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item>
            <Nav.Link
              eventKey="muscles"
              onSelect={onSelect}
              active={currentTab === 'muscles'}
            >
              Muscles
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item>
            <Nav.Link
              eventKey="material"
              onSelect={onSelect}
              active={currentTab === 'material'}
            >
              Material
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item>
            <Nav.Link
              eventKey="phatology"
              onSelect={onSelect}
              active={currentTab === 'phatology'}
            >
              Phatology
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col />
        <Col />
      </Row>
      <div className="tabs-content">
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <Labels />
          </Tab.Pane>
          <Tab.Pane eventKey="labels">
            <Labels />
          </Tab.Pane>
          <Tab.Pane eventKey="muscles">
            <Labels />
          </Tab.Pane>
          <Tab.Pane eventKey="material">
            <Labels />
          </Tab.Pane>
          <Tab.Pane eventKey="phatology">
            <Labels />
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
};

export default Tabs;
export { Tabs };
