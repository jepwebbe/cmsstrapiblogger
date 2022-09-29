import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home"
import NotFound from "../../Pages/NotFound"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default AppRouter