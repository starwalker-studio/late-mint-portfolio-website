import { Routes, Route } from "react-router";
import { LateMintRoutes } from "../../routes/LateMintRoutes";

export const LateMintApp = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<LateMintRoutes />} />
            </Routes>
        </>
    )
}
