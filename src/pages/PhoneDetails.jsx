
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from '../components/phoneCard/PhoneCard';

const PhoneDetails = () => {
    const [phone, setPhone] = useState({});

    const { id } = useParams();

    const phones = useLoaderData();
    
    // console.log(phones);

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id);
        setPhone(findPhone);
    }, [id, phones])

    return (
        <div className='flex justify-center items-center mx-auto h-screen'>
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default PhoneDetails;