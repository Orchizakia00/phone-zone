import { useLoaderData } from "react-router-dom";
import Banner from "../components/header/Banner";
import Phones from "../components/phones/Phones";

const Home = () => {

    const phones = useLoaderData();
    console.log(phones);

    return (
        <div>
            <Banner></Banner>

            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;