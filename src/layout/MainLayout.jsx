import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div>this is navbar</div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;