import { createContext, useContext, useMemo } from "react";
import { usePokemon } from "@/hooks/usePokemon";

export const PokemonContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {
    const { state, dispatch } = usePokemon();

    return (
        <PokemonContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context)
        throw new Error("usePokemonContext 는 PokemonContextProvider 내부에서 호출해야 합니다.");

    return useMemo(() => context, [context]);
};
