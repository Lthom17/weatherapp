import { useState } from 'react'
import { WeatherCard } from './WeatherCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export function Dashboard() {
    const [optionType, setOptionType] = useState(
        [
            "Current",
            "Four Day",
            "Sixteen Day"

        ]
    )

    return (
        <div>
            <h1>Explore Weather All Over the World</h1>
            <Row>
                {optionType.map((option) => (
                    <div key={option} className="card">
                        <WeatherCard type={option} />
                    </div>
                ))}

            </Row>

        </div>
    )
}