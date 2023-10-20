import { Card, Stack, Container, Button, Row, Col } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { BasketItem } from '../components/BasketItem';
import storeItems from '../data/items.json';
import { Link } from 'react-router-dom';

export function Basket() {
  const { BasketItems } = useShoppingBasket();

  return (
    <Container style={{ padding: '4rem' }}>
      <Card
        className='w-100'
        style={{
          maxWidth: '915px',
          background: '#F3F2F0',
          borderRadius: 35,
          margin: '0 auto',
          padding: '3rem',
        }}>
        <div style={{maxWidth:'803px'}}>
          <Card.Title
            style={{
              color: '#424242',
              fontSize: '40px',
              fontWeight: '700',
              padding:'20px 0'
            }}>
            Order summary
          </Card.Title>

          <Stack gap={4}>
            {BasketItems.map((item) => (
              <div style={{borderTop: '1px solid #B6B6B6', padding:'1rem 0'}}>
                <BasketItem key={item.id} {...item} />
              </div>
            ))}

            <div className='ms-auto  fs-10' style={{ display: 'none' }}>
              <span>Discounts</span>
            </div>

            <div className='ms-auto fw-medium' style={{fontSize: '40px', marginRight:'130px'}}>
              Total{' '}
              {formatCurrency(
                BasketItems.reduce((total, BasketItem) => {
                  const item = storeItems.find((i) => i.id === BasketItem.id);
                  return total + (item?.price || 0) * BasketItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </div>
      </Card>
      <Container
        style={{
          minHeight: '4rem',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Row className='mt-5'>
          <Col>
            <Link to={'/'}>
              <Button
                style={{ width: '400px', height: '90px', position: 'relative' }}
                variant='outline-dark'
                className='rounded'>
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                  }}>
                  Go to checkout
                </div>
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to={'/vending'}>
              <Button
                style={{ width: '400px', height: '90px', position: 'relative' }}
                variant='dark'
                className='rounded'>
                <div
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 30,
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                  }}>
                  Pay & Collect
                </div>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
/**width: 803px;
height: 1px;
Copy
background: #B6B6B6; */
