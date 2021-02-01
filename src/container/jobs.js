import React, { useContext } from 'react'

import { Card, Loading, NoResult } from '../components'
import { GlobalContext } from '../context/GlobalContext'
import { Context } from '../context/Context';

export default function JobContainer() {
    const { state } = useContext(GlobalContext);
    const { jobs } = state;
    const { formattedDate } = useContext(Context)
    
    return (
        <>
            <Loading>Loading...</Loading>
            {jobs.length === 0 
                ? <NoResult>No result found</NoResult>
                : <Card>
                    {jobs.map((job) => (
                        <Card.Item key={job.id} to={`/job/${job.id}`}>
                            {job.company_logo === null 
                                ? <Card.LogoNotFound>not found</Card.LogoNotFound> 
                                : <Card.Logo src={job.company_logo} alt={`${job.title} at ${job.company}`} />
                            }
                            <Card.Feature>
                                <Card.Subtitile>{job.company}</Card.Subtitile>
                                <Card.Title>{job.title}</Card.Title>
                                {job.type && <Card.CustomLabel>{job.type}</Card.CustomLabel>}
                                <Card.Meta>
                                    <Card.Location>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                                        <span>{job.location}</span>
                                    </Card.Location>
                                    <Card.Date dateTime={job.created_at}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path fill="currentColor" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                        <span>{formattedDate(job.created_at)}</span>
                                    </Card.Date>
                                </Card.Meta>
                            </Card.Feature>
                        </Card.Item>
                    ))}
                </Card>
            }
        </>
    )
}
