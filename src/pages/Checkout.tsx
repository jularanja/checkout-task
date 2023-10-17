import storeItems from '../data/items.json';
import { ProductItem } from '../components/ProductItem';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Checkout() {
  const { BasketQuantity } = useShoppingBasket();
  return (
    <>
      <Container className='d-flex p-4 g-4 justify-content-center align-items-center'>
        <Row className='justify-content-center p-4 g-4 '>
          {storeItems.map((item) => (
            <Col
              xs={6}
              key={item.id}
              className='w-50'>
              <ProductItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container style={{ minHeight: '4rem', display: "flex" , justifyContent:"center" }}>
        {BasketQuantity > 0 && (
          <Link to={'/basket'}>
            <Button
              style={{  height: '3rem', position: 'relative' }}
              variant='dark'
              className='rounded'>
              Go to Checkout
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
