import { Card, Stack, Container, Button } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { BasketItem } from '../components/BasketItem';
import storeItems from '../data/items.json';
import { Link } from 'react-router-dom';

export function Basket() {
  const { BasketItems } = useShoppingBasket();
  return (
    <Container style={{padding:'85px 0'}}  >
      <Card className='w-100' style={{width: '100%', height: '100%', background: '#F3F2F0', borderRadius: 35}}>
        
          <Card.Header>
            <Card.Title>Order summary</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack gap={3}>
              {BasketItems.map((item) => (
                <BasketItem key={item.id} {...item}  />
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
            style={{ width: '400px', height: '90px',  position: 'relative' }}
            variant='outline-dark'
            className='rounded'>
                 <div
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 30,
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                  }}>
                  Go to checkout
                </div>
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
