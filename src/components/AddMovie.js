import React, { useState } from 'react'

const AddMovie = () => {
    const [form, setForm] = useState({
        title: "",
        year: "",
        description: ""
    });

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Movie</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Movie Title</label>
                                    <input type="text" 
                                    value={form.title}
                                    onChange={(e)=> setForm({...form, title: e.target.value})}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="year" className="leading-7 text-sm text-white">Year</label>
                                    <input type="text"
                                    value={form.year}
                                    onChange={(e)=> setForm({...form, year: e.target.value})}
                                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="description" className="leading-7 text-sm text-white">Description</label>
                                    <textarea 
                                    value={form.description}
                                    onChange={(e)=> setForm({...form, description: e.target.value})}
                                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-600 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-fuchsia-600 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-700 rounded text-lg">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddMovie