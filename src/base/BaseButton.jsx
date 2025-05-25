import styled from "styled-components";

export const BaseButton = styled.button`
    display: grid;
    place-items: center;

    height: 50px;

    margin: 0px auto;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
    }
`;
