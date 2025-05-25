import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./PokemonCard.styled";

export const PokemonCard = memo(({ id, name, image, isSelected, dispatch }) => {
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

            <Styles.Button onClick={onAdd}>{isSelected ? "삭제" : "추가"}</Styles.Button>
        </Styles.Container>
    );
});

PokemonCard.displayName = "PokemonCard";
