import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { SearchInput } from './SerachInput';
import { SubMenu } from './SubMenu';
import imagoImg from '../../images/imago.svg';
import youtubeImg from '../../images/youtube.svg';
import gridImg from '../../images/grid.svg';
import avatarImg from '../../images/avatar.svg';

const Menu = () => {
  return (
    <Navbar className="main-menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={imagoImg}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <SearchInput />
            </Nav.Item>
            <Nav.Item>
              <SubMenu />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <span>
                  <img alt='' src={youtubeImg} />
                </span>
                How make an exercise?
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link>
                <span>
                  <img alt='' src={gridImg} />
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <span className="avatar">
                  <img alt='' src={avatarImg} />
                </span>
                <div className="user">Maria Rodriguez</div>
                <div className="role">Owner</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Menu;
export { Menu };
