import React from 'react'
import { Container } from './styles/no-result'

export default function NoResult({children, ...resProps}) {
    return <Container {...resProps}>{children}</Container>
}
