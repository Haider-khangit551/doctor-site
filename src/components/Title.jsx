import React from 'react'
import { motion } from 'motion/react'

const Title = ({ title, desc }) => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-3xl flex items-center justify-center  sm:text-5xl dark:text-white font-medium'>{title}</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='max-w-lg text-center text-gary-500 dark:text-white/75 mb-6'>{desc}</motion.p>
        </div>
    )
}

export default Title
