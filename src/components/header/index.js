import React from 'react'

import {
    Container,
    Title,
    Frame,
    Input,
    Button,
    Content
} from "./styles/header"

export default function Header({ children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.Content = function HeaderContent({children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Input = function HeaderInput({ ...restProps}) {
    return <Input {...restProps} />
}

Header.Button = function HeaderButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}