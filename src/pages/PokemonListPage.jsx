import { PokemonCard } from "@/components/PokemonCard";
import { PokemonDashboard } from "@/components/PokemonDashboard";
import * as Styles from "./PokemonListPage.styled";
import { pokemonData } from "@/__mocks__";

export const PokemonListPage = () => {
    return (
        <Styles.PageContainer>
            <PokemonDashboard></PokemonDashboard>

            <Styles.PokemonList>
                {pokemonData.map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.korean_name}
                            image={pokemon.img_url}
                        />
                    );
                })}
            </Styles.PokemonList>
        </Styles.PageContainer>
    );
};
