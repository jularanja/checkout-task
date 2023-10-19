import storeItems from '../data/items.json';
import { ProductItem } from '../components/ProductItem';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Checkout() {
  const { BasketQuantity } = useShoppingBasket();
  return (
    <>
      <Container className='d-flex p-6 g-4 justify-content-center align-items-center'>
        <Row
          className='justify-content-center p-5 g-4 row-product'
          style={{ maxWidth: '1080px' }}>
          {storeItems.map((item) => (
            <Col
              xs={6}
              key={item.id}
              className=' d-flex justify-content-center'>
              <ProductItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container
        style={{
          minHeight: '4rem',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '80px',
        }}>
        {BasketQuantity > 0 && (
          <Link to={'/basket'}>
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
                Go to checkout
              </div>

              <div
                className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                style={{
                  color: 'white',
                  width: '1.5rem',
                  height: '1.5rem',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(25%, 25%)',
                }}>
                {BasketQuantity}
              </div>
            </Button>
          </Link>
        )}
      </Container>
    </>
  );
}
