import { PokemonCard } from "@/components/PokemonCard";
import { PokemonDashboard } from "@/components/PokemonDashboard";
import { usePokemon } from "@/hooks/usePokemon";
import * as Styles from "./PokemonListPage.styled";
import { pokemonData } from "@/__mocks__";

export const PokemonListPage = () => {
    const { state, dispatch } = usePokemon();

    return (
        <Styles.PageContainer>
            <PokemonDashboard state={state} dispatch={dispatch} />

            <Styles.PokemonList>
                {pokemonData.map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.korean_name}
                            image={pokemon.img_url}
                            state={state}
                            dispatch={dispatch}
                        />
                    );
                })}
            </Styles.PokemonList>
        </Styles.PageContainer>
    );
};
