import { Route, Routes } from "react-router-dom"
import {Blogdetails} from "../../Pages/Blogdetails"
import Blogposts from "../../Pages/Blogposts"
import { Home } from "../../Pages/Home"
import NotFound from "../../Pages/NotFound"
import { Bloglist } from "../../Pages/Bloglist"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogposts" element={<Blogposts />} />
                <Route path="bloglist" element={<Bloglist />}/>
                <Route path="blogposts/:id" element={<Blogdetails />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default AppRouter