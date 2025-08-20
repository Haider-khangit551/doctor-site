// import React from 'react'
// import Title from './Title'
// import assets from '../assets/assets'
// import { motion } from 'motion/react'

// const Testemonial = () => {

//     const testimonialData = [

//         {
//             img: assets.test1,
//             name: "Amit Sharma",
//             say: "The doctors here truly care about their patients. I felt heard and understood."
//         },

//         {
//             img: assets.test2,
//             name: "Pooja Verma",
//             say: "Great experience. The staff was friendly and everything was well organized."
//         },

//         {
//             img: assets.test3,
//             name: "Rahul Mehta",
//             say: "Clean environment and quick service. I’ll definitely recommend it to others."
//         },

//     ]

//     return (
//         <motion.div
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.2 }}
//             id='testimonial' className='flex flex-col mt-[-60px] items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-ggray-700 dark:text-white'>
//             <Title title='What Our Patients Say' desc='Hear real stories and experiences from patients who trusted us with their health, care, and recovery.' />

//             <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
//                 {testimonialData.map((testimonial, index) => (
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.2 }}
//                         viewport={{ once: true }}
//                         key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
//                         <img src={testimonial.img} className='w-full h-[350px] rounded-xl' alt="" />
//                         <h3 className='mt-3 mb-2 text-lg font-semibold'>{testimonial.name}</h3>
//                         <p className='text-sm opacity-60 w-5/6'>{testimonial.say}</p>
//                     </motion.div>
//                 ))}
//             </div>

//         </motion.div>
//     )
// }

// export default Testemonial
import React from 'react'
import Title from './Title'
import { motion } from 'motion/react'
import { FaQuoteLeft } from "react-icons/fa"

const Testemonial = () => {

    const testimonialData = [
        {
            name: "Amit Sharma",
            say: "The doctors here truly care about their patients. I felt heard and understood."
        },
        {
            name: "Pooja Verma",
            say: "Great experience. The staff was friendly and everything was well organized."
        },
        {
            name: "Rahul Mehta",
            say: "Clean environment and quick service. I’ll definitely recommend it to others."
        },
    ]

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id='testimonial'
            className='flex flex-col mt-[-100px] items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >
            <Title
                title='What Our Patients Say'
                desc='Hear real stories and experiences from patients who trusted us with their health, care, and recovery.'
            />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
                {testimonialData.map((testimonial, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        key={index}
                        className='relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer'
                    >
                        {/* Decorative Quote Icon */}
                        <FaQuoteLeft className="text-indigo-500 text-2xl mb-3" />

                        {/* Testimonial Text */}
                        <p className='text-base italic leading-relaxed text-gray-600 dark:text-gray-300'>
                            "{testimonial.say}"
                        </p>

                        {/* Author */}
                        <h3 className='mt-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400'>
                            – {testimonial.name}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testemonial
