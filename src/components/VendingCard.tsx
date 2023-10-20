
import storeItems from '../data/items.json';

type VendingCardProps = {
  id: number;
  quantity: number;
};

export default function VendingCard({id, quantity}: VendingCardProps) {
  const item = storeItems.find((i) => i.id === id);
  return (
    <div className='vending-card text-center' >
      <div className='quantity'>{quantity}</div>
      <div className='image' style={{backgroundImage: `url(${item?.imgUrl})`}}>
      </div>      
    </div>
  )
}
