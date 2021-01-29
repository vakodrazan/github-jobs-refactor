import React from 'react'
import { Header } from '../components'

export default function HeaderContainer() {
    return (
        <Header>
            <Header.Title>Github <span>Jobs</span></Header.Title>
            <Header.Content>
                <Header.Frame>
                    <Header.Input 
                        placeholder="Title, companies, expertise or benefits"
                        // value=""
                        // onChange={() => }
                    />
                    <Header.Button>Search</Header.Button>
                </Header.Frame>

            </Header.Content>
        </Header>
    )
}
