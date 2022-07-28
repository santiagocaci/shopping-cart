import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContex';

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

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
        {cartQuantity > 0 && (
          <Button
            variant='dark'
            className='rounded-pill'
            onClick={() => openCart()}
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
                display: `${cartQuantity === 0 ? 'none' : ''}`,
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};
