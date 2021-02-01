import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.article`
    padding: 12px;
    display: grid;
    gap: 36px;

    @media (min-width: 1440px) {
        max-width: 1440px;
        margin: auto;
        grid-template-columns: 1fr 2fr;
        gap: 77px;
    }

    a {
        text-decoration: none;
    }
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #282538;
    padding-left: 12px;
    padding-bottom: 20px;

    span {
        font-weight: normal;
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        margin: auto;
    }
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const SidebarLink = styled(ReachRouterLink)`
    color: #1E86FF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
`;

export const Contact = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;

    a {
        color: #1E86FF;
    }
`;

export const SideBarTitle = styled.h3`
    color: #B9BDCF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
`;

export const Content = styled.section`
    a {
        text-decoration: none;
    }

    img {
        max-width: 100px;
    }
`;

export const ContentHeader = styled.header`
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: flex-start;
    color: #334680;

    h2 {
        margin: 0;
    }

    p {
        border: 1px solid #334680;
        box-sizing: border-box;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px 8px;
        height: 26px;
        margin: 0;
    }

    @media (min-width: 1440px) {
        flex-direction: row;
        gap: 17px;
        align-items: center;
    }
`;

export const CompanyDetails = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    padding-top: 32px;
`;

export const LogoNotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    border-radius: 4px;
    width: 42px;
    height: 42px;
    font-weight: 500;
    font-size: 12px;
    color: #BDBDBD;
`;

export const Logo = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #F2F2F2;
`;

export const Address = styled.div`

    p {
        display: flex;
        align-items: center;
        gap: 7px;
        color: #B9BDCF;
    }
`;

export const Information = styled.div`
    padding-bottom: 40px
    a {
        text-decoration: none;
    }
`;

export const Time = styled.time`
    color: #B7BCCE;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding-top: 10px;
`;
