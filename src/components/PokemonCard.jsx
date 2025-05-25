import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./PokemonCard.styled";

export const PokemonCard = ({ id, name, image, state, dispatch }) => {
    const navigate = useNavigate();

    const onAdd = useCallback(
        (e) => {
            e.stopPropagation();
            try {
                dispatch({ type: "TOGGLE", payload: { id } });
            } catch (err) {
                alert(err.message);
            }
        },
        [dispatch, id],
    );

    return (
        <Styles.Container onClick={() => navigate(`/dex/${id}`)}>
            <Styles.Image src={image} />

            <Styles.Info>
                <Styles.Name>{name}</Styles.Name>
                <Styles.Index>No. {Number(id).toString().padStart(3, "0")}</Styles.Index>
            </Styles.Info>

            <Styles.Button onClick={onAdd}>
                {state.selectedPokemonIds.includes(id) ? "삭제" : "추가"}
            </Styles.Button>
        </Styles.Container>
    );
};
