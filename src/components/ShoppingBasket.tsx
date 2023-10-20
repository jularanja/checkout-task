import { Stack, Container } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { BasketItem } from './BasketItem';
import storeItems from '../data/items.json';

export function ShoppingBasket() {
  const { BasketItems } = useShoppingBasket();
  return (
    <Container style={{ display: 'none' }}>
      <div className='w-100'>
        <Container>
          <div>
            <Stack gap={3}>
              {BasketItems.map((item) => (
                <BasketItem key={item.id} {...item} />
              ))}
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
          </div>
        </Container>
      </div>
    </Container>
  );
}
