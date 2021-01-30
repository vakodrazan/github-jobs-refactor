import React from 'react';

import { 
    Container,
    Frame,
    Input,
    Label,
    LocationSearch,
} from "./styles/filters";

export default function Filters({ children, ...restProps}) {
    return (
        <Container>
            {children}
        </Container>
    )
}


Filters.Frame = function FiltersFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Filters.Input = function FiltersInput({ ...restProps }) {
    return <Input {...restProps} />
}

Filters.Label = function FiltersLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Filters.LocationSearch = function FiltersLocationSearch({ children, ...restProps }) {
    return <LocationSearch {...restProps}>{children}</LocationSearch>
}