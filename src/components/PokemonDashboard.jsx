import { memo } from "react";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonCardPlaceholder } from "@/components/PokemonCardPlaceholder";
import * as Styles from "./PokemonDashboard.styled";
import { pokemonData } from "@/__mocks__";
import { usePokemonState } from "@/contexts/PokemonContext";

export const PokemonDashboard = memo(() => {
    const state = usePokemonState();

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
                            isSelected={true}
                        />
                    );
                })}
                {Array.from({ length: 6 - state.selectedPokemonIds.length }).map((_, index) => {
                    return <PokemonCardPlaceholder key={index} />;
                })}
            </Styles.Content>
        </Styles.Container>
    );
});

PokemonDashboard.displayName = "PokemonDashboard";
