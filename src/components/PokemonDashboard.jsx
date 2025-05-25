import { PokemonCard } from "@/components/PokemonCard";
import { PokemonCardPlaceholder } from "@/components/PokemonCardPlaceholder";
import * as Styles from "./PokemonDashboard.styled";
import { pokemonData } from "@/__mocks__";

export const PokemonDashboard = ({ state, dispatch }) => {
    return (
        <Styles.Container>
            <Styles.Content>
                {state.selectedPokemonIds.map((id) => {
                    return (
                        <PokemonCard
                            key={id}
                            id={id}
                            name={pokemonData[id - 1].korean_name}
                            image={pokemonData[id - 1].img_url}
                            state={state}
                            dispatch={dispatch}
                        />
                    );
                })}
                {Array.from({ length: 6 - state.selectedPokemonIds.length }).map((_, index) => {
                    return <PokemonCardPlaceholder key={index} />;
                })}
            </Styles.Content>
        </Styles.Container>
    );
};
