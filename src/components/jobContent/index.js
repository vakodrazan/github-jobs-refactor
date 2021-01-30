import React, { useContext, useEffect, useState } from 'react'
import { Filters } from '..';
import JobContainer from '../../container/jobs';
import { Context } from '../../context/Context';

import { Container } from "./styles/index";


export default function Content({ children, ...restProps}) {
    const [ fullTime, setFullTime ] = useState(false);
    const [ location, setLocation ] = useState("");

    const [selectCity, setSelectCity] = useState(null);

    const { filterJob } = useContext(Context)


    const cities = [
        { id: 1, name: "New York" },
        { id: 2, name: "San Francisco" },
        { id: 3, name: "Berlin" },
        { id: 4, name: "London" }
    ];

    const handleCity = (city) => {
        if (selectCity && city.id === selectCity.id) {
          setSelectCity(null);
          filterJob({ type: "LOCATION", value: "" })
        } else {
          setSelectCity(city);
          filterJob({ type: "LOCATION", value: city.name })
        }
    };

    const handleKeyLocation = (e) => {
        if (e.key === "Enter") {
          setSelectCity(null);
          filterJob({ type: "LOCATION", value: location });
        }
    };

    useEffect(() => {
        setSelectCity(cities[0]);
    }, []);

    return (
        <Container {...restProps}>
            <Filters>
                <Filters.Frame>
                    <Filters.Input 
                        type="checkbox"
                        id="full-time"
                        checked={fullTime}
                        onChange={() => setFullTime(!fullTime)}
                    />
                    <Filters.Label htmlFor="full-time">Full time</Filters.Label>
                </Filters.Frame>

                <Filters.LocationSearch>
                    <Filters.Label htmlFor="description">Location</Filters.Label>
                    <Filters.Input 
                        id="description"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyDown={handleKeyLocation}
                        placeholder="City, state, zip code or country"
                    />
                </Filters.LocationSearch>

                {cities.map(city => (
                    <Filters.Frame key={city.id}>
                        <Filters.Input
                            type="radio"
                            checked={selectCity ? city.id === selectCity.id : false}
                            id={city.id}
                            onChange={() => handleCity(city)}
                        />
                        <Filters.Label htmlFor={city.id}>{city.name}</Filters.Label>
                    </Filters.Frame>
                ))}
            </Filters>
            <JobContainer />
        </Container>
    )
}