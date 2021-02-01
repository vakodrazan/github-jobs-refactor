import React, { useContext, useState } from 'react'
import { Header } from '../components';
import { GlobalContext } from '../context/GlobalContext';

export default function HeaderContainer() {
    const [ query, setQuery ] = useState('');
    const { dispatch } = useContext(GlobalContext)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "DESCRIPTION", value: query });
    }



    return (
        <Header>
            <Header.Title>Github <span>Jobs</span></Header.Title>
            <Header.Content>
                <Header.Frame onSubmit={handleFormSubmit}>
                    <Header.Input 
                        placeholder="Title, companies, expertise or benefits"
                        value={query}
                        onChange={({target}) => setQuery(target.value)}
                    />
                    <Header.Button>Search</Header.Button>
                </Header.Frame>
            </Header.Content>
        </Header>
    )
}
