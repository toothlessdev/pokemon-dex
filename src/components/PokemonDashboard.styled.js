import styled from "styled-components";

export const Container = styled.header`
    position: sticky;
    top: 0;

    width: 100%;
    height: 300px;

    margin: 0px auto;

    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
    display: flex;
    gap: 14px;
    justify-content: center;

    width: 100%;
    max-width: 1400px;

    margin: 0px auto;
    padding: 20px;
`;
