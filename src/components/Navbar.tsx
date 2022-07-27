import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <NavbarBs
      sticky='top'
      className='bg-white shadow-sm mb-3 text-dark'
      style={{
        fontWeight: 'bold',
      }}
    >
      <Container>
        <Nav>
          <Nav.Link to='/' as={NavLink}>
            <span className='font-weight-bold'>Home</span>
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          variant='dark'
          className='rounded-pill'
          style={{
            position: 'relative',
          }}
        >
          <FaShoppingCart
            style={{
              width: '1.5rem',
              height: '1.5rem',
            }}
          />
          <div
            className='rounded-circle bg-danger'
            style={{
              position: 'absolute',
              padding: '2px 10px',
              bottom: 0,
              right: 0,
              transform: 'translate(25%, 50%)',
            }}
          >
            5
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
