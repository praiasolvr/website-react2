import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import News from "../pages/News";
import DatailsNews from "../pages/DetailsNews";
import Us from "../pages/Us";
import Contacts from "../pages/Contacts"
import Singin from "../pages/Sigin";

import Department from "../pages/Department";

import WorkWithUs from "../pages/WorkWithUs";


export default function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sigin" element={<Singin />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<DatailsNews />} />
            <Route path="/us" element={<Us />} />
            <Route path="/contacts" element={<Contacts />} />


            <Route path="/department" element={<Department />} />
        </Routes>
    )
}