import { Card, Container } from "react-bootstrap"
import { useShoppingBasket } from "../context/ShoppingBasketContext"
import { BasketItem } from "../components/BasketItem"
import {Link} from 'react-router-dom'

import { StarRating } from "../components/StarRating"




export function Vending() {
  const { BasketItems } = useShoppingBasket()
  return (
    
       <Container >
         <Card  className="w-100 mt-4"  >
          <Container>
          <Card.Header >
            <Card.Title>Success</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="flex">
              {BasketItems.map(item => (
                <BasketItem key={item.id} {...item}/>
                
            
              ))}

            </div>
            <StarRating/>
          </Card.Body>
          </Container>
        </Card>

<Link to={'/'}>Continue shopping</Link>


       </Container>
      )
    }




