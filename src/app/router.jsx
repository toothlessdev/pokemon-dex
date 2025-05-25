import { Fragment } from "react";
import {
    createBrowserRouter,
    createRoutesFromChildren,
    Route,
    RouterProvider,
} from "react-router-dom";
import { RootLayout } from "@/components/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { PokemonDetailPage } from "@/pages/PokemonDetailPage";
import { PokemonListPage } from "@/pages/PokemonListPage";

const routes = createRoutesFromChildren(
    <Fragment>
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dex" element={<PokemonListPage />} />
            <Route path="/dex/:id" element={<PokemonDetailPage />} />
        </Route>
    </Fragment>,
);

export const router = createBrowserRouter(routes);
