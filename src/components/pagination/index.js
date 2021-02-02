import React from 'react';

import {Container, List} from "./styles/pagination";

export default function Pagination({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Pagination.List = function PaginationList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
} 