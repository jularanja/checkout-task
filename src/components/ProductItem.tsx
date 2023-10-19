import { Button, Card, Image } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { formatCurrency } from '../utilities/formatCurrency';
import basketIcon from '/src/assets/basket-shopping-solid.svg';

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  stock: number;
  discount: number;
  quantity: number;
  imgUrl: string;
};

export function ProductItem({
  id,
  name,
  price,
  /*stock,
  dicount,
  quantity,*/
  imgUrl,
}: ProductItemProps) {
  const { getItemQuantity, increaseBasketQuantity, decreaseBasketQuantity } =
    useShoppingBasket();
  const quantity = getItemQuantity(id);
  return (
    <Card
      className='shadow rounded-0 p-4 '
      style={{ objectFit: 'cover', minWidth: '442px', height: '541px' }}>
      <span className='fs-1 position-absolute' style={{ top: '0' }}>
        {quantity === 0 ? null : quantity}
      </span>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='266px'
        width='223px'
        className='rounded-0 border'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='p-0'>
        <Card.Title>
          <h3 className='fs-3 fw-bold mt-4 mb-5'>{name}</h3>
        </Card.Title>
        <div
          className='mt-auto d-flex align-items-center'
          style={{ gap: '5rem' }}>
          <span className='fs-1'>{formatCurrency(price)}</span>

          {quantity === 0 ? (
            <Button
              variant='dark'
              className='w-50'
              style={{
                borderRadius: '50px',
                display: 'grid',
                maxWidth: '165px',
                gridTemplateColumns: 'auto auto',
                alignItems: 'center',
              }}
              onClick={() => increaseBasketQuantity(id)}>
              <Image
                src={basketIcon}
                alt='basket icon'
                height='35px'
                width='30px'
                style={{ margin: '0 auto' }}
              />
              <span style={{ fontSize: '24px', fontWeight: '700' }}>Add</span>
            </Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column justify-content-space-between'
              style={{ gap: '.5rem', minWidth: '145px' }}>
              <div
                className='d-flex align-items-center justify-content-center w-50 '
                style={{
                  gap: '1.5rem',
                  top: '20px',
                  right: '20px',
                  minWidth: '165px',
                }}>
                <Button
                  variant='dark'
                  onClick={() => decreaseBasketQuantity(id)}
                  style={{ width: '46px', height: '46px' }}>
                  <div
                    style={{
                      position: 'relative',
                      bottom: '23px',
                      fontSize: '46px',
                      fontFamily: 'cursive',
                    }}>
                    -
                  </div>
                </Button>
                <div>
                  {' '}
                  <div className='fs-3'>
                    <span>{quantity === 0 ? null : quantity}</span>
                  </div>
                </div>
                <Button
                  variant='dark'
                  onClick={() => increaseBasketQuantity(id)}
                  style={{ width: '46px', height: '46px' }}>
                  <div
                    style={{
                      position: 'relative',
                      bottom: '18px',
                      fontSize: '42px',
                      fontFamily: 'cursive',
                    }}>
                    +
                  </div>
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>

    </Card>
  );
}
