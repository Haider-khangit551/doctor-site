import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Testemonial = () => {

    const testimonialData = [

        {
            img: assets.test1,
            name: "Amit Sharma",
            say: "The doctors here truly care about their patients. I felt heard and understood."
        },

        {
            img: assets.test2,
            name: "Pooja Verma",
            say: "Great experience. The staff was friendly and everything was well organized."
        },

        {
            img: assets.test3,
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
            id='testimonial' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-ggray-700 dark:text-white'>
            <Title title='What Our Patients Say' desc='Hear real stories and experiences from patients who trusted us with their health, care, and recovery.' />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {testimonialData.map((testimonial, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={testimonial.img} className='w-full h-[350px] rounded-xl' alt="" />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{testimonial.name}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{testimonial.say}</p>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    )
}

export default Testemonial
