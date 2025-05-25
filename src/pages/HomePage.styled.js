import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    background-color: #f0f0f0;
`;

export const LogoImage = styled.img`
    width: 100%;
    max-width: 500px;
`;

export const Button = styled.button`
    display: grid;
    place-items: center;

    width: 200px;
    height: 50px;

    margin: 14px 0px;

    border-radius: 12px;

    color: #fff;
    background-color: #e10000;

    &:hover {
        cursor: pointer;
        background-color: #cc0000;
    }
`;
