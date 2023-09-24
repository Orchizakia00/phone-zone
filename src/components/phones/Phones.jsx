/* eslint-disable react/prop-types */
import Phone from "../phone/Phone";

const Phones = ({phones}) => {
    return (
        <div>
            <h1 className="text-2xl text-center mt-12">Our Phones Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    phones?.map(phone => <Phone phone={phone} key={phone.id}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;