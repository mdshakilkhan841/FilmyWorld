import React from 'react'
import ReactStars from 'react-stars'

const Details = () => {
    return (
        <div className="p-5 max-w-[1240px] mx-auto">
            <div className="flex sm:flex-row flex-col sm:space-x-6 sm:px-32 py-5">
                <div className='lg:w-screen w-full'>
                    <img className='lg:h-72 xl:h-96' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3zLNrkGgh9SvIsOC63-8bLHkVS-upvvIZpS5FqCFKx-x43K8_" alt="" />
                </div>
                <div className='space-y-2 '>
                    <h1 className='text-3xl font-bold text-gray-300'>The Galaxy <span className='text-xl text-gray-400'>(2018)</span></h1>
                    <ReactStars size={20} half={true} value={5} edit={false} />
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt molestiae similique illum deleniti quis mollitia libero tempora quasi quas dolores, quisquam expedita perspiciatis nobis explicabo itaque commodi harum. Accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem expedita qui corporis minima omnis natus dicta aliquam reprehenderit eos numquam cumque exercitationem, cum recusandae error rerum perferendis. Doloribus, eos illo.</p>
                </div>
            </div>
        </div>
    )
}

export default Details