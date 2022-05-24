import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Skelton.css'
export class New extends Component {
    render() {
        return (
            <div>
                <Container>
  <Row>
    <Col><h6 className="nothing">Arun Kumar</h6></Col>
    <Col xs={6}><h6 className="nothing">Arun Kumar</h6></Col>
    <Col><h6 className="nothing">Arun Kumar</h6></Col>
  </Row>
  <Row>
    <Col><h6 className="nothing">Arun Kumar</h6></Col>
    <Col xs={5}><h6 className="nothing">Arun Kumar</h6></Col>
    <Col><h6 className="nothing">Arun Kumar</h6></Col>
  </Row>
</Container>
            </div>
        )
    }
}

export default New
