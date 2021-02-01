import React from 'react';

import {
    Container,
    Title,
    Sidebar,
    SidebarLink,
    Contact,
    SideBarTitle,
    Content,
    ContentHeader,
    CompanyDetails,
    LogoNotFound,
    Logo,
    Address,
    Information,
    Time
} from "./styles/details"

export default function Details({ children, ...resProps}) {
    return <Container {...resProps}>{children}</Container>
}

Details.Title = function DetailsTitle({ children, ...resProps}) {
    return <Title {...resProps}>{children}</Title>
}

Details.Sidebar = function DetailsSidebar({ children, ...resProps}) {
    return <Sidebar {...resProps}>{children}</Sidebar>
}

Details.SidebarLink = function DetailsSidebarLink({ children, ...resProps}) {
    return <SidebarLink {...resProps}>{children}</SidebarLink>
}

Details.Contact = function DetailsContact({ children, ...resProps}) {
    return <Contact {...resProps}>{children}</Contact>
}

Details.SideBarTitle = function DetailsSideBarTitle({ children, ...resProps}) {
    return <SideBarTitle {...resProps}>{children}</SideBarTitle>
}
Details.Content = function DetailsContent({ children, ...resProps}) {
    return <Content {...resProps}>{children}</Content>
}

Details.ContentHeader = function DetailsContentHeader({ children, ...resProps}) {
    return <ContentHeader {...resProps}>{children}</ContentHeader>
}

Details.CompanyDetails = function DetailsCompanyDetails({ children, ...resProps}) {
    return <CompanyDetails {...resProps}>{children}</CompanyDetails>
}

Details.LogoNotFound = function DetailsLogoNotFound({ children, ...resProps}) {
    return <LogoNotFound {...resProps}>{children}</LogoNotFound>
}

Details.Logo = function DetailsLogo({ ...resProps}) {
    return <Logo {...resProps} />
}

Details.Address = function DetailsAddress({ children, ...resProps}) {
    return <Address {...resProps}>{children}</Address>
}

Details.Information = function DetailsInformation({ children, ...resProps}) {
    return <Information {...resProps}>{children}</Information>
}

Details.Time = function DetailsTime({ children, ...resProps}) {
    return <Time {...resProps}>{children}</Time>
}
