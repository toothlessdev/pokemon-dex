import { useNavigate, useParams } from "react-router-dom";
import * as Styles from "./PokemonDetailPage.styled";
import { pokemonData } from "@/__mocks__";

export const PokemonDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { korean_name, img_url, types, description } = pokemonData[id - 1] || {};

    return (
        <Styles.PageContainer>
            <Styles.Image src={img_url}></Styles.Image>

            <Styles.Content>
                <Styles.Name>{korean_name}</Styles.Name>
                <Styles.Index>No. {Number(id).toString().padStart(3, "0")}</Styles.Index>

                <Styles.Types>{types.join(", ")}</Styles.Types>
                <Styles.Description>{description}</Styles.Description>
            </Styles.Content>

            <Styles.PreviousButton onClick={() => navigate("/dex")}>뒤로가기</Styles.PreviousButton>
        </Styles.PageContainer>
    );
};
