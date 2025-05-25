import { PokemonCardPlaceholder } from "@/components/PokemonCardPlaceholder";
import * as Styles from "./PokemonDashboard.styled";

export const PokemonDashboard = () => {
    return (
        <Styles.Container>
            <Styles.Content>
                {Array.from({ length: 6 }).map((_, index) => (
                    <PokemonCardPlaceholder key={index} />
                ))}
            </Styles.Content>
        </Styles.Container>
    );
};
