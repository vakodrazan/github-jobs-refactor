import styled from "styled-components"
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled(ReachRouterLink)`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: currentColor;

    &:hover {
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }
`;

export const Logo = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 4px;
    background: #F2F2F2;
`;

export const LogoNotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    border-radius: 4px;
    width: 90px;
    height: 90px;
    font-weight: 500;
    font-size: 12px;
    color: #BDBDBD;
`;

export const Feature = styled.div`
    color: #334680;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
`;

export const Title = styled.h2`
    font-size: 18px;
    line-height: 21px;
    margin: 0;
    padding-bottom: 12px;
`;

export const Subtitile = styled.p`
    margin: 0;
    padding-bottom: 8px;
`;

export const CustomLabel = styled.p`
    color: #334680;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63px;
    height: 26px;
    margin: 0;
`;

export const Meta = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 26px;
    font-weight: 500;
    font-size: 12px;
    color: #B9BDCF;

    @media (min-width: 1440px) {
        padding: 0;
        gap: 28px;
        justify-content: flex-end;
    }
`;

export const Location = styled.address`
    display: flex;
    align-items: center;
    gap: 5px;
    font-style: normal;
`;

export const Date = styled.time`
    display: flex;
    align-items: center;
    gap: 5px;
`;