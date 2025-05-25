import { useCallback, useReducer, useRef } from "react";

export const POKEMON_LIMIT = 6;

const initialState = {
    selectedPokemonIds: [],
};

const reducer = (state, action) => {
    const { id } = action.payload;
    const isSelected = state.selectedPokemonIds.includes(id);

    switch (action.type) {
        case "APPEND":
            return {
                ...state,
                selectedPokemonIds: [...state.selectedPokemonIds, id],
            };
        case "REMOVE":
            return {
                ...state,
                selectedPokemonIds: state.selectedPokemonIds.filter(
                    (pokemonId) => pokemonId !== id,
                ),
            };
        case "TOGGLE":
            return {
                ...state,
                selectedPokemonIds: isSelected
                    ? state.selectedPokemonIds.filter((pokemonId) => pokemonId !== id)
                    : [...state.selectedPokemonIds, id],
            };
        default:
            return state;
    }
};

export const usePokemon = () => {
    const [state, _dispatch] = useReducer(reducer, initialState);
    const selectedPokemonIdsRef = useRef(state.selectedPokemonIds);

    selectedPokemonIdsRef.current = state.selectedPokemonIds;

    const dispatch = useCallback(
        (action) => {
            const { id } = action.payload || {};

            const currentSelectedIds = selectedPokemonIdsRef.current;

            if (action.type === "TOGGLE" && !currentSelectedIds.includes(id)) {
                if (currentSelectedIds.length >= POKEMON_LIMIT)
                    throw new Error(`포켓몬은 ${POKEMON_LIMIT}마리까지만 선택할 수 있습니다!`);
            }
            if (action.type === "APPEND") {
                if (currentSelectedIds.length >= POKEMON_LIMIT)
                    throw new Error(`포켓몬은 ${POKEMON_LIMIT}마리까지만 선택할 수 있습니다!`);
            }

            _dispatch(action);
        },
        [_dispatch],
    );

    return {
        state,
        dispatch,
    };
};
