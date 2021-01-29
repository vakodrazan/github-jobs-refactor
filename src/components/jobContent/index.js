import React from 'react'
import JobContainer from '../../container/jobs';

import { Container } from "./styles/index";

export default function Content({ children, ...restProps}) {
    return (
        <Container {...restProps}>
            <JobContainer />
        </Container>
    )
}