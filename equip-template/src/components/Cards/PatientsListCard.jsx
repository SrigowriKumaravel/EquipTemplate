import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './CardsData.css'

function PatientsListCard(props) {
    return (
        <Container>
            <Row>
                <b>Patient's list</b>
                <Col xs={6} md={4}>
                    <input type="radio" /> All
                    <input type="radio" />Pending
                    <input type="radio" />Completed
                 </Col>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientsListCard;