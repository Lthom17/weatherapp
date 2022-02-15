import { useState, useEffect } from 'react';



function useLatLong(apiKey, city, state) {
    
    const [latLong, setLatLong] = useState(
        {
            "lat": 0,
            "lon": 0
       }
   )

    useEffect(() => {

        if (city) {
                fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=5&appid=${apiKey}`)
                    .then(response => {
                        if (response.ok) {
                            console.log(response.json);
                            return response.json();
                        }
                        throw response
                    }).then(data => {
                        setLatLong({
                            "lat": data[0].lat,
                            "lon": data[0].lon
                        })
                    }).catch(error => {
                        console.log(error)
                    })
           
        }
            
    }, [city, state, apiKey]);

   
           
    return  latLong;

}

export default useLatLong;