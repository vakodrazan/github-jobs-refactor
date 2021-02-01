import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Details } from '../components'
import { Context } from '../context/Context'
import { GlobalContext } from '../context/GlobalContext'

export default function DetailsContainer() {
    const { state } = useContext(GlobalContext)
    const { jobs } = state
    const { jobId } = useParams();
    const { formattedDate } = useContext(Context)

    const jobDetails = jobs.length > 0 && jobs.find(job => job.id === jobId);

    return (
        <>
            <Details.Title>Github <span>Jobs</span></Details.Title>
            <Details>
                <Details.Sidebar>
                    <Details.SidebarLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>
                        <span>Back to search</span>
                    </Details.SidebarLink>
                    <Details.Contact>
                        <Details.SideBarTitle>How to Apply</Details.SideBarTitle>
                        <div dangerouslySetInnerHTML={{ __html: jobDetails.how_to_apply}}></div>
                    </Details.Contact>
                </Details.Sidebar>
                <Details.Content>
                    <Details.ContentHeader>
                        <h2>{jobDetails.title}</h2>
                        <p>{jobDetails.type}</p>
                    </Details.ContentHeader>
                    <Details.Time dateTime={jobDetails.created_at}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path fill="currentColor" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        <span>{formattedDate(jobDetails.created_at)}</span>
                    </Details.Time>
                    <Details.CompanyDetails>
                        {jobDetails.company_logo === null
                            ? <Details.LogoNotFound>not found</Details.LogoNotFound>
                            : <Details.Logo src={jobDetails.company_logo} alt={jobDetails.title, jobDetails.company} />
                        }
                        <Details.Address>
                            <h3>{jobDetails.company}</h3>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                                <span>{jobDetails.location}</span>
                            </p>
                        </Details.Address>
                    </Details.CompanyDetails>
                    <Details.Information dangerouslySetInnerHTML={{ __html: jobDetails.description}}></Details.Information>
                </Details.Content>
            </Details>
        </>
    )
}
