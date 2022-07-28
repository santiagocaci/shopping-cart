import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContex';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    resetCartQuantity,
  } = useShoppingCart();

  return (
    <Card>
      <Card.Img
        variant='top'
        src={imgUrl}
        height={'200px'}
        style={{
          objectFit: 'cover',
        }}
      />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
          <span className='fs-2'>{name}</span>
          <span className='fs-4'>{formatCurrency(price)}</span>
        </Card.Title>
        <div>
          {getItemQuantity(id) === 0 ? (
            <Button
              onClick={() => incrementCartQuantity(id)}
              className='btn-dark w-100'
            >
              Add To Cart
            </Button>
          ) : (
            <div className='d-flex justify-content-md-between align-items-center justify-content-center gap-4'>
              <Button
                onClick={() => decrementCartQuantity(id)}
                className='btn-dark'
              >
                -1
              </Button>
              <span className='font-bold fs-4'>{getItemQuantity(id)}</span>
              <Button
                onClick={() => incrementCartQuantity(id)}
                className='btn-dark'
              >
                +1
              </Button>
              <Button
                onClick={() => resetCartQuantity(id)}
                className='btn-danger'
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
