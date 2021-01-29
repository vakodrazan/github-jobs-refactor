import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalContext'
import { Content } from "./styles/loading"

export default function Loading() {
    const { state } = useContext(GlobalContext);
    const { loading } = state;
    return loading && <Content>{children}</Content>
}
