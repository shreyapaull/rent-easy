import React from "react";
import { Button, Card } from 'react-bootstrap'; // Ensure these are imported from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const Bike_card = ({ img, name, desc, btn }) => {
    return (
        <div className="col-12">
            <Card className="card1" style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img variant="top" src={img} alt={name} height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Button variant="primary">{btn}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Bike_card;
