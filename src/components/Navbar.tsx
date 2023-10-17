import { Col, Image, Container, Row, Navbar as NavbarBs } from "react-bootstrap"


export function Navbar() {
  return (
    <NavbarBs style={{ backgroundColor: "#F3F2F0" }}>
      <Container className="justify-content-center p-3">
      <Row >
        <Col >
          <Image src="./logo.png" style={{ maxWidth: '8rem' }} />
        </Col>
        
      </Row>
    
      </Container>
    </NavbarBs>
  )
}