import React, { useContext } from 'react'
import { Filters } from '../index';
import { Context } from '../../context/Context';
import JobPaginationContainer from '../../container/pagination';
import { Container } from "./styles/index";


export default function Content({ children, ...restProps}) {

    const { 
        fullTime, 
        setFullTime, 
        location, 
        setLocation,
        selectCity, 
        handleCity,
        handleKeyLocation,
        cities
    } = useContext(Context)
    

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
                    <Filters.FieldsetLocation>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                        </div>
                        <Filters.Input 
                            id="description"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onKeyDown={handleKeyLocation}
                            placeholder="City, state, zip code or country"
                        />
                    </Filters.FieldsetLocation>
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
            <JobPaginationContainer />
        </Container>
    )
}