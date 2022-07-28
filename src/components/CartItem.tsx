import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContex';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { resetCartQuantity } = useShoppingCart();
  const item = storeItems.find(item => item.id === id);
  if (item === undefined) return null;

  return (
    <Stack
      direction='horizontal'
      className='d-flex justify-content-between'
      gap={2}
    >
      <div className='d-flex gap-2 align-items-center'>
        <img
          src={item.imgUrl}
          alt={item.name}
          style={{
            width: '115px',
            height: '70px',
            objectFit: 'cover',
          }}
        />
        <div>
          <div className='fs-5'>
            {item.name}
            {quantity > 1 && (
              <span className='text-muted fs-6'> x{quantity}</span>
            )}
          </div>
          <div className='fs-6 text-muted'>{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div className='d-flex gap-1 align-items-center'>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          className='btn-danger'
          size='sm'
          onClick={() => resetCartQuantity(id)}
        >
          X
        </Button>
      </div>
    </Stack>
  );
};
