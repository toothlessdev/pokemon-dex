import { createContext, useContext } from "react";
import { usePokemon } from "@/hooks/usePokemon";

export const PokemonStateContext = createContext(null);
export const PokemonDispatchContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {
    const { state, dispatch } = usePokemon();

    return (
        <PokemonStateContext.Provider value={state}>
            <PokemonDispatchContext.Provider value={dispatch}>
                {children}
            </PokemonDispatchContext.Provider>
        </PokemonStateContext.Provider>
    );
};

export const usePokemonState = () => {
    const context = useContext(PokemonStateContext);
    if (!context) {
        throw new Error("usePokemonState는 PokemonContextProvider 내부에서 호출해야 합니다.");
    }
    return context;
};

export const usePokemonDispatch = () => {
    const context = useContext(PokemonDispatchContext);
    if (!context) {
        throw new Error("usePokemonDispatch는 PokemonContextProvider 내부에서 호출해야 합니다.");
    }
    return context;
};
