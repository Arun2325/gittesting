import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Skelton.css'
import Skeleton ,{ SkeletonTheme }from 'react-loading-skeleton'
export class NewCard extends Component {
    render() {
        return (
            <div>
                <Container>
  <Row>
    <Col><h6 className="nothing"><SkeletonTheme highlightColor='white' ><Skeleton   count={1}   /></SkeletonTheme></h6></Col>
    <Col xs={6}><h6 className="nothing"><SkeletonTheme highlightColor='white'><Skeleton   count={1}   /></SkeletonTheme></h6></Col>
    <Col><h6 className="nothing"><SkeletonTheme highlightColor='white'><Skeleton   count={1}   /></SkeletonTheme></h6></Col>
  </Row>
  <Row>
    <Col><h6 className="nothing"><SkeletonTheme highlightColor='white'><Skeleton   count={1}   /></SkeletonTheme></h6></Col>
    <Col xs={5}><h6 className="nothing"><SkeletonTheme highlightColor='white'><Skeleton   count={1}   /></SkeletonTheme></h6></Col>
    <Col><h6 className="nothing"><SkeletonTheme highlightColor='white'><Skeleton   count={1}   /></SkeletonTheme></h6></Col>
  </Row>
</Container>
            </div>
        )
    }
}

export default NewCard
