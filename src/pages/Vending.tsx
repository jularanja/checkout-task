import { Col, Container, Row } from "react-bootstrap"
import { useShoppingBasket } from "../context/ShoppingBasketContext"


import { StarRating } from "../components/StarRating"
import VendingCard from "../components/VendingCard"


export function Vending() {
  const { BasketItems } = useShoppingBasket()
  return (
    
       <Container>            
        <div className="flex vending-card-body">
          <h1 className="text-center fw-bold mb-5">Success</h1>                          
          <Row>
            {BasketItems.map(item => (
              <Col md={2}>
                <VendingCard key={item.id} {...item}/>
              </Col>          
            ))}                
          </Row>
          <h3 className="text-center p-5 we-love">We would love your feedback</h3> 
          <div className="text-center">
            <StarRating />
          </div>
          <div>
            <h3 className="text-center p-5 collect">Please collect your purchase</h3>
          </div>
          <div id="machine">
            <div id="screen"></div>
            <div className="carets">
              <span>˅</span><br />
              <span>˅</span><br />
              <span>˅</span>
            </div>
            <div className="switch">
              <div className="switch-pin"></div>
            </div>

            <div className="collect-button">
              <div className="collect-here">Collect Here</div>
            </div>
            
            

          </div>
        </div>
       </Container>
      )
    }




