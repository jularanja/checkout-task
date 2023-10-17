import { Card, Stack, Container, Button } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { BasketItem } from '../components/BasketItem';
import storeItems from '../data/items.json';
import { Link } from 'react-router-dom';

export function Basket() {
  const { BasketItems } = useShoppingBasket();
  return (
    <Container>
      <Card className='w-100'>
        <Container>
          <Card.Header>
            <Card.Title>Order summary</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack gap={3}>
              {BasketItems.map((item) => (
                <BasketItem key={item.id} {...item} />
              ))}

              <div className='ms-auto  fs-10'>
                <span>Discounts</span>
              </div>

              <div className='ms-auto fw-bold fs-5'>
                Total{' '}
                {formatCurrency(
                  BasketItems.reduce((total, BasketItem) => {
                    const item = storeItems.find((i) => i.id === BasketItem.id);
                    return total + (item?.price || 0) * BasketItem.quantity;
                  }, 0)
                )}
              </div>
            </Stack>
          </Card.Body>
        </Container>
      </Card>
      <Container
        style={{
          minHeight: '4rem',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Link to={'/'}>
          {' '}
          <Button
            style={{ height: '3rem', position: 'relative' }}
            variant='outiline-dark'
            className='rounded'>
            Continue shopping
          </Button>
        </Link>
        <Link to={'/vending'}>
          {' '}
          <Button
            style={{ height: '3rem', position: 'relative' }}
            variant='dark'
            className='rounded'>
            Pay & Collect{' '}
          </Button>
        </Link>
      </Container>
    </Container>
  );
}
