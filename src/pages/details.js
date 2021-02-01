import React from 'react'
import { Content, Details } from '../components'

export default function DetailsContainer() {
    return (
        <Details>
            <Details.Header>
                <Details.Title>Github <span>Jobs</span></Details.Title>

                {/* <Details.Sidebar>
                    <Details.SideBarHeader to="/">Back to search</Details.SideBarHeader>
                    <Details.Contact>
                        <Details.SideBarTitle></Details.SideBarTitle>
                        <div dangerouslySetInnerHTML={{ __html: how_to_apply}}></div>
                    </Details.Contact>
                </Details.Sidebar> */}
            </Details.Header>
            {/* <Details.Content>
                <Content.Header>
                    <h2></h2>
                    <span></span>
                    <time></time>
                </Content.Header>
                <Details.CompanyDetails>
                    <Details.LogoNotFound>not found</Details.LogoNotFound>
                    <Details.Logo />
                </Details.CompanyDetails>
                <Details.Information dangerouslySetInnerHTML={{ __html: description}}></Details.Information>
            </Details.Content> */}
        </Details>
    )
}
