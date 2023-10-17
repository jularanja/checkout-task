import { Button, Card } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { formatCurrency } from '../utilities/formatCurrency';

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
  const {
    getItemQuantity,
    increaseBasketQuantity,
    decreaseBasketQuantity,
  } = useShoppingBasket()
  const quantity = getItemQuantity(id)
  return (
    <Card className="shadow rounded-0 p-4">
      <Card.Img
        variant='top'
        src={imgUrl}
        height='266px'
        width='223px'
        className='rounded-0 border'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>
          <span>{name}</span>
          
        </Card.Title>
        <div className='mt-auto'>

        <span> {formatCurrency(price)}</span>

          {quantity === 0 ? (
            <Button variant='dark'
              className='w-50 position-relative'
              style={{ right: '-40%' }}
              onClick={() => increaseBasketQuantity(id)}>
              Add
            </Button >
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center w-50 position-relative"
                style={{ gap: ".5rem", top: '20px', right: '20px' }}
              >
                <Button variant='dark' onClick={() => decreaseBasketQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in Basket
                </div>
                <Button variant='dark' onClick={() => increaseBasketQuantity(id)}>+</Button>
              </div>
            
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
