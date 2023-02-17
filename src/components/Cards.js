import React, { useState } from 'react';
import ReactStars from 'react-stars';

const Cards = () => {
    const [data, setData] = useState([
        {
            name: "The Galaxy",
            year: "2018",
            rating: 5,
            img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
        },
        {
            name: "The Galaxy",
            year: "2018",
            rating: 3.5,
            img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
        },
        {
            name: "The Galaxy",
            year: "2018",
            rating: 2.8,
            img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
        },
        {
            name: "The Galaxy",
            year: "2018",
            rating: 4,
            img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
        },
        {
            name: "The Galaxy",
            year: "2018",
            rating: 5,
            img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
        }
    ]);

    return (
        <div className='flex flex-wrap justify-between p-4 mt-2'>
            {
                data.map((e, i) => {
                    return (
                        <div key={i} className='card font-bold shadow-lg p-2 hover:-translate-y-2 transition-all duration-500 cursor-pointer mt-6 '>
                            <img className='h-72' src={e.img} alt='img-movie' />
                            <h1><span className='text-gray-500 mr-2'>Name: </span>{e.name}</h1>
                            <h1 className='flex items-center'><span className='text-gray-500 mr-2'>Rating:</span>
                            <ReactStars size={20} half={true} value={e.rating} edit={false}/>
                            </h1>
                            <h1><span className='text-gray-500 mr-5'>Year: </span> {e.year}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards