import React from 'react';
import { Nav, Badge } from 'react-bootstrap';
import homeImg from '../../../images/home_icon.svg';
import exerciseImg from '../../../images/exercise_icon.svg';
import blocksImg from '../../../images/blocks_icon.svg';
import strokeImg from '../../../images/stroke.svg';
import campanaImg from '../../../images/campana.svg';

const SubMenu = () => {
  return (
    <Nav className="sub-menu justify-content-center">
      <Nav.Link>
        <span>
          <img alt='' src={homeImg} />
        </span>
      </Nav.Link>
      <Nav.Link>
        <span>
          <img alt='' src={exerciseImg} />
        </span>
      </Nav.Link>
      <Nav.Link>
        <span>
          <img alt='' src={blocksImg} />
        </span>
      </Nav.Link>
      <Nav.Link>
        <span>
          <img alt='' src={strokeImg} />
        </span>
      </Nav.Link>
      <Nav.Link>
        <Badge pill variant="dark">25</Badge>
        <span>
          <img alt='' src={campanaImg} />
        </span>
      </Nav.Link>
    </Nav>
  );
}

export default SubMenu;
export { SubMenu };
