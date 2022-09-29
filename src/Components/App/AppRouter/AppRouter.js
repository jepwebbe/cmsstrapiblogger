import { Route, Routes } from "react-router-dom"
import Blogposts from "../../Pages/Blogposts"
import { Home } from "../../Pages/Home"
import NotFound from "../../Pages/NotFound"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogposts" element={<Blogposts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default AppRouter