import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px]  mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;