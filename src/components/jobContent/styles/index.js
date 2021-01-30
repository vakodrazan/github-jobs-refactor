import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    gap: 25px;
    padding: 12px;

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 2fr;
        gap: 10px;
        max-width: 1440px;
        margin: auto;
    }
`;