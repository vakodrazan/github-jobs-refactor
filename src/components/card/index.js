import React from 'react'

import {
    Logo,
    Feature,
    Title,
    Subtitile,
    Meta,
    Container,
    CustomLabel,
    LogoNotFound,
    Location,
    Date
} from "./styles/card"

export default function Card({ children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Card.Logo = function CardLogo({ ...restProps }) {
    return <Logo {...restProps} />
}

Card.LogoNotFound = function CardLogoNotFound({ ...restProps }) {
    return <LogoNotFound {...restProps} />
}

Card.Feature = function CardFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.Subtitile = function CardSubtitile({ children, ...restProps }) {
    return <Subtitile {...restProps}>{children}</Subtitile>
}

Card.CustomLabel = function CardCustomLabel({ children, ...restProps }) {
    return <CustomLabel {...restProps}>{children}</CustomLabel>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Location = function CardLocation({ children, ...restProps }) {
    return <Location {...restProps}>{children}</Location>
}

Card.Date = function CardDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}