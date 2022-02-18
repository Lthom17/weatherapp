import { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm'
import useLatLong from '../hooks/useLatLong';


function Weather() {

    const apiKey = '0fbd74361270c1f98d6267df9be53a32'

    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [data, setData] = useState(null);


    const coordinates = useLatLong(apiKey, city, state);

    console.log(coordinates.lat, coordinates.lon)



    useEffect(() => {

        if (city) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response
                }).then(data => {
                    setData(data)
                }).catch(error => {
                    console.log(error)
                })

        }

    }, [coordinates, apiKey]);

    console.log(data);


    return (
        <WeatherForm setCity={setCity} setState={setState} />
    );

}

export default Weather;