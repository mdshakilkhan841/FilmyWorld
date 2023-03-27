import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesRef } from '../Firebase/firebase';
import swalert from 'sweetalert';

const AddMovie = () => {
    const [form, setForm] = useState({
        title: "",
        image: "",
        year: "",
        description: ""
    });

    const [loading, setLoading] = useState(false);

    const addMovie = async () => {
        try {
            setLoading(true);
            await addDoc(moviesRef, form);
            swalert({
                title: "Successfully Added",
                icon: "success",
                buttons: false,
                timer: 3000
            });
            setLoading(false);
            setForm({
                title: "",
                image: "",
                year: "",
                description: ""
            });
        } catch (error) {
            swalert({
                title: error,
                icon: error,
                buttons: false,
                timer: 3000
            });
        }
    }

    const handleClick = () => {
        const form = document.querySelector('form');
        if (!form.checkValidity()) {
            return;
        }

        addMovie();
    };

    const handleSubmit = (event) => {
        event.preventDefault()
    };

    return (
        <div>
            <div className="container px-5 py-8 flex flex-wrap justify-between max-w-[1240px] mx-auto">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Movie</h1>
                </div>
                <div className="md:w-2/3 mx-auto">
                    <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-white">Movie Title</label>
                                <input type="text" required
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="year" className="leading-7 text-sm text-white">Year</label>
                                <input type="text" required
                                    value={form.year}
                                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="image" className="leading-7 text-sm text-white">Image</label>
                                <input type="text"
                                    value={form.image}
                                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-white">Description</label>
                                <textarea
                                    value={form.description}
                                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='submit' onClick={handleClick} className="flex mx-auto text-white bg-fuchsia-600 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-700 rounded text-lg">
                                {loading ? <TailSpin height={35} color="white" /> : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMovie