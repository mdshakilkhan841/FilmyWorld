import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 z-30 border-b-2 border-fuchsia-600 bg-neutral-800 '>
            <div className='max-w-[1240px] mx-auto flex justify-between text-3xl text-fuchsia-600 font-bold py-3 px-5'>
                <Link to={'/'}>
                    <span>Filmy<span className='text-white'>World</span></span>
                </Link>
                <Link to={'/add movie'}>
                    <h1 className='text-lg '>
                        <Button variant="outlined" sx={{ borderColor: "white", ":hover": { borderColor: '#C02ED3' } }} >
                            <AddIcon className='mr-1' sx={{ color: "white" }} /><span className='text-fuchsia-600 font-bold'>Add New</span>
                        </Button>
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default Header