import React from 'react'
import { FaMicroscope, FaCalendarPlus, FaHeartbeat, FaLongArrowAltRight } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from 'motion/react'

const Services = () => {
    const icon1 = <FaMicroscope size={25} />
    const icon2 = <FaCalendarPlus size={25} />
    const icon3 = <FaHeartbeat size={25} />
    const icon4 = <FaHandHoldingHeart size={25} />

    const servicesData = [
        {
            title: "Lab Tests & Diagnostics",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dicta iure possimus quibusdam consectetur amet at assumenda facere reiciendis sapiente",
            icon: icon1
        },

        {
            title: "Appointments & Scheduling",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dicta iure possimus quibusdam consectetur amet at assumenda facere reiciendis sapiente",
            icon: icon2
        },

        {
            title: "Heart & Wellness Care",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dicta iure possimus quibusdam consectetur amet at assumenda facere reiciendis sapiente",
            icon: icon3
        },

        {
            title: "Heart & Wellness Care",
            desc: "Comprehensive heart health services with expert care, regular monitoring, and lifestyle guidance to promote long-term wellness and vitality.",
            icon: icon4
        }
    ]

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            transition={{staggerChildren: 0.2}}
            id='services' className='relative flex mt-[-50px] flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <img src={assets.bgImage1} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
            <Title title='What we are providing?' desc='Providing expert medical care, advanced diagnostics, and personalized treatment plans to ensure your health and well-being.' />

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Services
