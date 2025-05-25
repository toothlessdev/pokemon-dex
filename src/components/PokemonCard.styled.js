import styled from "styled-components";
import { BaseButton } from "@/base/BaseButton";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 200px;
    height: 260px;

    padding: 8px;

    border: 1px solid #ccc;
    border-radius: 10px;
`;

export const Image = styled.img`
    width: 80%;
    height: 150px;

    margin: 0 auto;

    object-fit: cover;
`;

export const Button = styled(BaseButton)`
    width: 100%;

    color: #fff;
    background-color: #e10000;

    &:hover {
        background-color: #cc0000;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    margin: 8px 0px;
`;

export const Name = styled.h1`
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
`;

export const Index = styled.h2`
    font-size: 0.8rem;
    font-weight: normal;
    text-align: center;
    color: #666;
`;
