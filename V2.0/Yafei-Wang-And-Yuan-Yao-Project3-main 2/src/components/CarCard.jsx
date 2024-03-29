import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CarCard(props) {
    const car = props.car;

    return (
        <div className="car-card">
            <Card className='w-auto'>
                <Card.Header>
                    <span color="blue">{car.Make} - {car.Model} - {car.Year}</span></Card.Header>
                <Card.Body>
                    <Card.Text>${' '}{(car.SellingPrice)}</Card.Text>
                    <Card.Text>{car.Odometer} {' '}Miles</Card.Text>
                    <Card.Text>Color: {car.Color} | Interior: {car.Interior} | State: {car.State}</Card.Text>
                    <a href={"/cars/" + car._id}>
                        <Button size="sm" className="custom-btn">
                            View the Car
                        </Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}