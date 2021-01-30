import React, { useContext, useState } from 'react'
import { Filters } from '..';
import JobContainer from '../../container/jobs';
import { Context } from '../../context/Context';

import { Container } from "./styles/index";


export default function Content({ children, ...restProps}) {
    const { 
        fullTime, 
        setFullTime,
        description,
        setDescription,
        location,
        setLocation
    } = useContext(Context)

    const cities = [
        { id: 1, name: "New York" },
        { id: 2, name: "San Francisco" },
        { id: 3, name: "Berlin" },
        { id: 4, name: "London" }
    ];

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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Filters.LocationSearch>

                {cities.map(city => (
                    <Filters.Frame key={city.id}>
                        <Filters.Input
                            type="radio"
                            id={city.id}
                        />
                        <Filters.Label htmlFor={city.id}>{city.name}</Filters.Label>
                    </Filters.Frame>
                ))}
            </Filters>
            <JobContainer />
        </Container>
    )
}