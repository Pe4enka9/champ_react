import {Route, Routes} from "react-router-dom";
import Gagarin from "./components/Gagarin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Missions from "./components/Missions";
import Booking from "./components/Booking";
import Flight from "./components/Flight";

export default function App() {
    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<Gagarin/>}/>
                <Route path="/missions" element={<Missions/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/flight" element={<Flight/>}/>
            </Routes>

            <Footer/>
        </>
    )
}