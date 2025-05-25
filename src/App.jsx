import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { GlobalStyles } from "@/app/styles/GlobalStyles";

export default function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <RouterProvider router={router} />
        </Fragment>
    );
}
