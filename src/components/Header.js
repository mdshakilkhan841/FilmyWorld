import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between text-3xl text-pink-600 font-bold p-3 border-b-2 border-pink-600'>
            <Link to={'/'}>
            <span>Filmy<span className='text-white'>World</span></span>
            </Link>
            <Link to={'/add movie'}>
                <h1 className='text-lg '>
                    <Button variant="outlined" sx={{ borderColor: "white", ":hover": { borderColor: '#db2776' } }} >
                        <AddIcon className='mr-1' sx={{ color: "white" }} /><span className='text-pink-600 font-bold'>Add New</span>
                    </Button>
                </h1>
            </Link>
        </div>
    )
}

export default Header