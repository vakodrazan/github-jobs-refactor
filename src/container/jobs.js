import React, { useContext } from 'react'

import { Card, Loading } from '../components'
import { GlobalContext } from '../context/GlobalContext'
import { Context } from '../context/Context';

export default function JobContainer() {
    const { state } = useContext(GlobalContext);
    const { jobs } = state;
    const { formattedDate } = useContext(Context)
    
    return (
        <>
            <Loading>Loading...</Loading>
            {jobs && 
                <Card>
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
                                        <span>{job.location}</span>
                                    </Card.Location>
                                    <Card.Date dateTime={job.created_at}>
                                        {formattedDate(job.created_at)}
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
