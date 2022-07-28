import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContex';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import StoreItem from '../data/items.json';

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  const totalPriceCart = () => {
    return cartItems.reduce((total, cartItem) => {
      const item = StoreItem.find(i => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>{' '}
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <div className='ms-auto fw-bold fs-4 text-end pt-2'>
          Total: {formatCurrency(totalPriceCart())}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
