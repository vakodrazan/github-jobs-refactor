import styled from "styled-components"

export const Container = styled.section`
    padding-top: 2rem;
    font-weight: 500;
`;
export const Frame = styled.fieldset`
    display: flex;
    flex-direction: row;
    gap: 12px;
    border: none;
    margin: 0;
    padding: 0;
`;
export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
`;
export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
`;
export const LocationSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-top: 32px;
    padding-bottom: 27px;
    color: #B9BDCF;


    Frame {
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    Label {
        text-transform: uppercase;
        font-weight: 700;
    }

    Input {
        height: 48px;
        width: 60%;
        border: none;

        &:focus {
            border: 1px solid #1e86ff;
            outline: none;
            box-shadow: 0 0 4px rgb(30 134 255 / 58%);
        }
    }
`;