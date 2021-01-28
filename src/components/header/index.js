import React from 'react'

import {
    Container,
    Title,
    Frame,
    Input,
    Button
} from "./styles/header"

export default function Header({ children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
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