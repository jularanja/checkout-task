import { Offcanvas, Stack, Container } from "react-bootstrap"
import { useShoppingBasket } from "../context/ShoppingBasketContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { BasketItem } from "./BasketItem"
import storeItems from "../data/items.json"

type ShoppingBasketProps = {
  isOpen: boolean
}

export function ShoppingBasket({ isOpen }: ShoppingBasketProps) {

  const { closeBasket, BasketItems } = useShoppingBasket()
  return (
   <Container >
     <Offcanvas show={isOpen} onHide={closeBasket} className="w-100"  >
      <Container>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Order summary</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {BasketItems.map(item => (
            <BasketItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              BasketItems.reduce((total, BasketItem) => {
                const item = storeItems.find(i => i.id === BasketItem.id)
                return total + (item?.price || 0) * BasketItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      </Container>
    </Offcanvas>
   </Container>
  )
}
