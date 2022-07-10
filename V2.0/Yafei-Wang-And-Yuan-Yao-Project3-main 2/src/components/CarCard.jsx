import React from "react";
import { Card } from "react-bootstrap";

export default function CarCard(props) {

    return (
        <div className="car-card">
            <Card className='w-auto'>
                <Card.Header>
                    <span color="blue">Jeep Grand Cherokee</span></Card.Header>
                <Card.Body>
                    <Card.Text>$ 4000</Card.Text>
                    <Card.Text>43990 Miles</Card.Text>
                    <Card.Text>Color: Black | Interior: Black | State: WA</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}