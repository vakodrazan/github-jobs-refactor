import React, { useContext } from 'react'
import { Card } from '../components'
import { GlobalContext } from '../context/GlobalContext'

export default function JobContainer() {
    const { state } = useContext(GlobalContext);
    const { jobs } = state;
    return (
        <>
            {jobs && 
                <Card>
                    {jobs.map((job) => {
                        const options = { year: "numeric", month: "numeric", day: "numeric" };
                        const today = new Date().toLocaleString("en-US", options);
                        const createdAt = new Date(job.created_at).toLocaleString("en-US", options);
                        const totalDate = new Date(today) - new Date(createdAt)
                        const daysAgo = Math.floor( totalDate / (1000 * 3600 * 24));

                        return ( 
                            <Card.Item key={job.id}>
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
                                            {daysAgo} {daysAgo > 1 ? "days" : "day"}
                                        </Card.Date>
                                    </Card.Meta>
                                </Card.Feature>
                            </Card.Item>
                        )
                    })}
                </Card>
            }
        </>
    )
}
