import * as Styles from "./PokemonCardPlaceholder.styled";
import pokeballImage from "@/assets/pokeball.png";

export const PokemonCardPlaceholder = () => {
    return (
        <Styles.Container>
            <Styles.PokeballImage src={pokeballImage} />
        </Styles.Container>
    );
};
