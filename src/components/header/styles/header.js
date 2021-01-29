import styled from "styled-components";

export const Container = styled.div`
    padding: 12px;

    @media (min-width: 1440px) {
        max-width: 1440px;
        margin: auto;
    }

`;

export const Content = styled.section`
    background: url("/images/backgroundImg.png");
    background-position: 50%;
    background-size: cover;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;;
    background-repeat: no-repeat;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #282538;

    span {
        font-weight: normal;
    }
`;

export const Frame = styled.form`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-left: 42px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 4px;
    width: 75%;
    background-image: url('/images/work_outline-24px.svg');
    background-repeat: no-repeat;
    background-position: 10px 50%;

    @media (min-width: 1440px) {
        max-width: 70%;
    }
`;

export const Input = styled.input`
    max-width: 60%;
    height: 32px;
    border: none;
    background: transparent;
    width: 60%;

    &:focus {
        border: 1px solid #1e86ff;
        outline: none;
        box-shadow: 0 0 4px rgb(30 134 255 / 58%);
    }
`;

export const Button = styled.button`
    color: #fff;
    background-color: #1E86FF;
    height: 32px;
    padding: 0 12px;
    border: none;
    border-radius: 4px;

    &:hover {
        opacity: .8;
    }

    &:focus {
        outline: none;
    }
`;