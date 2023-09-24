import { useEffect, useState } from "react";
import PhoneCard from "../components/phoneCard/PhoneCard";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const [notFound, setNotFound] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))


        if (favoriteItems) {
            setFavorites(favoriteItems);
            
            const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

            console.log(total);

            setTotalPrice(total)
        }

        else {
            setNotFound("No Data Found")
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNotFound("No Data Found");
    }

    return (
        <div>
            {
                notFound ? <p className="h-[70vh] flex justify-center items-center">{notFound}</p> : (
                    <div>
                        {
                            favorites.length > 0 && (
                                <div>
                                    <button onClick={handleRemove} className="p-4 rounded-md my-8 bg-gray-300 block mx-auto">Remove Favorites</button>
                                    <h1>Total price : {totalPrice}</h1>
                                </div>
                            )}
                        <div className="grid grid-cols-2 gap-6">
                            {
                                isShow ? favorites.map((phone) => (
                                    <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                                ))
                                    :
                                    favorites.slice(0, 2).map(phone => (
                                        <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                                    ))
                            }
                        </div>
                        {favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="p-4 rounded-md my-8 bg-gray-300 block mx-auto">
                            {isShow ? "See less" : "See more"}
                        </button>}
                    </div>
                )}
        </div>
    );
};

export default Favorites;