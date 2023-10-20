import { Stack } from 'react-bootstrap';

import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type BasketItemProps = {
  id: number;
  quantity: number;
};

export function BasketItem({ id, quantity }: BasketItemProps) {

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction='horizontal' className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        style={{ width: '110px', height: '100px', objectFit: 'cover', marginRight:'30px' }}
      />

      <div>
        <h3 style={{ fontSize: '32px', fontWeight: '400', marginRight:'140px', fontFamily: 'Roboto'}}>
          {item.name}{' '}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </h3>

        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div style={{ fontSize: '32px', fontWeight: '400', marginRight:'30px', fontFamily: 'Open Sans', marginTop: '-30px'}}> {formatCurrency(item.price * quantity)}</div>

 

    </Stack>
  );
}
