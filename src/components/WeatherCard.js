import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export function WeatherCard({ type }) {


    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="public/images/weather_icon.png/100px180" />
            <Card.Body>
                <Card.Title>{type}</Card.Title>
                <Card.Text>
                    Get your {type} weather here.
                </Card.Text>
                <Button variant="primary">Get Forecast</Button>
            </Card.Body>
        </Card>

    )



}