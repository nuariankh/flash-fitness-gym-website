import { useState, useEffect } from 'react';
import {Row, Col, Card, CardBody, CardTitle, CardImg, } from 'reactstrap';

const ExerciseCard = ( {exercise} ) => {
    const { id, name, image, targets } = exercise;
    
    return (
        <Card>
            <Row>
                <Col xs="4">
                    <CardImg top width="100%" src={image} alt={name} />
                </Col>
                <Col xs="8">
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ExerciseCard;

