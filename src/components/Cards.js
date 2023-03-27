import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from '../Firebase/firebase';

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            //Getting data from Firebase and store a new array and displaying
            const getData = await getDocs(moviesRef);
            let newData = [];
            getData.forEach((doc) => {
                const movieData = doc.data();
                // Add the document ID to the data object
                newData.push({ ...movieData, id: doc.id });
            });
            setData(newData);

            setLoading(false);
        }
        getData();
    }, [])


    return (
        <div className='max-w-[1240px] mx-auto p-5'>
            <div className='flex flex-wrap'>
                {loading ? <div className='w-full flex justify-center items-center h-96'><Dna /></div> :
                    data.map((e, i) => {
                        return (
                            <div className='xl:w-1/5 lg:w-1/4 sm:w-1/3 w-1/2 p-2'>
                                <div key={i} className=' bg-neutral-800 md:text-lg sm:text-md text-xs font-bold shadow-lg p-2 hover:-translate-y-2 transition-all duration-500 cursor-pointer mt-6'>
                                    <img className='md:h-80 h-56 w-full' src={e.image} alt='img-movie' />
                                    <h1><span className='text-gray-400 mr-2'>Name: </span>{e.title}</h1>
                                    <h1 className='flex items-center'><span className='text-gray-400 mr-2'>Rating:</span>
                                        <ReactStars size={20} half={true} value={5} edit={false} />
                                    </h1>
                                    <h1><span className='text-gray-400 mr-5'>Year: </span> {e.year}</h1>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Cards;
