import styled from "styled-components";
import { BaseButton } from "@/base/BaseButton";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100dvh;
    width: 100%;
    max-width: 1000px;

    margin: 0px auto;
    padding: 20px;
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;

    margin: 0px auto;
`;

export const Content = styled.div`
    width: 100%;
    margin: 12px 0px;

    text-align: center;
`;

export const Name = styled.h1`
    font-size: 1.5rem;
    font-weight: normal;
`;

export const Index = styled.h2`
    font-size: 1.2rem;
    font-weight: normal;
    color: #666;
`;

export const Types = styled.p`
    margin: 8px 0px;
`;

export const Description = styled.p`
    margin: 20px 0px;
    font-size: 0.9rem;
`;

export const PreviousButton = styled(BaseButton)`
    width: 200px;

    color: #fff;
    background-color: #333;

    &:hover {
        cursor: pointer;
        background-color: #555;
    }
`;
