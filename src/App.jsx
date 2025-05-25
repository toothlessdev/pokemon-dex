import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { GlobalStyles } from "@/app/styles/GlobalStyles";
import { PokemonContextProvider } from "@/contexts/PokemonContext";

export default function App() {
    return (
        <Fragment>
            <PokemonContextProvider>
                <GlobalStyles />
                <RouterProvider router={router} />
            </PokemonContextProvider>
        </Fragment>
    );
}
