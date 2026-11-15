import { Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import Announcements from "../pages/Announcements";
import Contact from "../pages/Contact";
import EventDetails from "../pages/EventDetails";
import Events from "../pages/Events";
import FAQs from "../pages/FAQs";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Results from "../pages/Results";
import Schedule from "../pages/Schedule";
import Sponsors from "../pages/Sponsors";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="events/:eventSlug" element={<EventDetails />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="sponsors" element={<Sponsors />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="results" element={<Results />} />
                <Route path="announcements" element={<Announcements />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faqs" element={<FAQs />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
