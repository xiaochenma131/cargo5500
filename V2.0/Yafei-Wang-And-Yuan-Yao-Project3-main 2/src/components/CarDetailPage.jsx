import { Card, Button } from "react-bootstrap";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CarDetailPage() {
    // const car = props.car;
    const [car, setCar] = useState(undefined);
    const params = useParams();

    useEffect(() => {
        Axios.get('/api/cars/' + params.CarId)
            .then(function (response) {
                setCar(response.data);
            });
    }, []);

    if (!car) {
        return (
            <div>
                The car does not exist.
                <Button size="sm" className="custom-btn" as={Link} to='/'>
                    Go back to home
                </Button>
            </div>)
    } else {
        return (
            <div className="car-card">
                <Card className='w-auto'>
                    <Card.Header>
                        <span color="blue">{car.Make} - {car.Model} - {car.Year} | Price: ${car.SellingPrice}</span></Card.Header>
                    <Card.Body>
                        <Card.Text>Vin: {car.Vin} {' '}</Card.Text>
                        <Card.Text>Trim: {car.Trim} {' '}</Card.Text>
                        <Card.Text>Body: {car.Body} {' '}</Card.Text>
                        <Card.Text>Transmission: {car.Transmission} {' '}</Card.Text>
                        <Card.Text>Odometer: {car.Odometer} Miles{' '}</Card.Text>
                        <Card.Text>CarCondition: {car.CarCondition} (1 - 10){' '}</Card.Text>
                        <Card.Text>Color: {car.Color} | Interior: {car.Interior} </Card.Text>
                        <Card.Text>State: {car.State}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )

    }
}