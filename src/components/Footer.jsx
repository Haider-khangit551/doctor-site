
// import React from 'react'
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";

// const Footer = () => {
//     return (
//         <footer className='bg-gray-100 dark:bg-gray-800 border-t  mt-12 text-gray-700 dark:text-gray-300 pt-16 pb-8 px-6 lg:px-8 transition-colors duration-300'>
//             {/* brand detail */}
//             <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-300 dark:border-gray-700 pb-12'>

//                 {/* Company logo and detail */}
//                 <div>
//                     {/* <img src="logo.png" alt="company logo"
//                         className='w-[160px] h-[60px] mb-4 object-cover' /> */}
//                     <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Health</h2>
//                     <p className='text-sm text-gray-500 dark:text-gray-400'>
//                         Streamline your administrative tasks, access critical patient data, and enhance collaboration among your healthcare team effortlessly.
//                     </p>
//                 </div>

//                 {/* Services */}
//                 <div>
//                     <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Service</h3>
//                     <ul className="space-y-2 flex flex-col">
//                         <li><a href='#' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Home</a></li>
//                         <li><a href='#services' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Services</a></li>
//                         <li><a href='#testimonial' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Testimonials</a></li>
//                         <li><a href='#service' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Services</a></li>
//                 </ul>
//             </div>

//             {/* Available Cities */}
//             <div>
//                 <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Available City</h3>
//                 <ul className="space-y-2">
//                     <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Delhi</li>
//                     <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Mumbai</li>
//                     <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Noida</li>
//                     <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Indore</li>
//                 </ul>
//             </div>

//             {/* Contact */}
//             <div>
//                 <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Contact</h3>
//                 <ul className="space-y-2 text-gray-500 dark:text-gray-400">
//                     <li className='flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition'>
//                         <MdEmail /><span>abc123@gmail.com</span>
//                     </li>
//                     <li className='flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition'>
//                         <IoCall /><span>+91-3456784567</span>
//                     </li>
//                     <li className='flex items-start gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition'>
//                         <FaLocationDot />
//                         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>

//             {/* Copyright */ }
//     <div className='max-w-7xl m-auto mt-4 md:flex justify-between text-gray-500 dark:text-gray-400 text-sm'>
//         <p>© 2025 Clinic. All rights reserved.</p>
//         <p>Made with ❤️ by Webseeder Technologies</p>
//     </div>
//         </footer >
//     )
// }

// export default Footer




import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <footer className='bg-gray-100 dark:bg-slate-900 border-t mt-12 text-gray-700 dark:text-gray-300 pt-16 pb-8 px-6 lg:px-8 transition-colors duration-300'>

            {/* brand detail */}
            <motion.div
                className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-300 dark:border-gray-700 pb-12'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* Company logo and detail */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">HealthCare</h2>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Streamline your administrative tasks, access critical patient data, and enhance collaboration among your healthcare team effortlessly.
                    </p>
                </motion.div>

                {/* Services */}
                <motion.div variants={itemVariants}>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Service</h3>
                    <ul className="space-y-2 flex flex-col">
                        <li><a href='#' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Home</a></li>
                        <li><a href='#services' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Services</a></li>
                        <li><a href='#testimonial' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Testimonials</a></li>
                        <li><a href='#service' className='cursor-pointer hover:text-blue-500 dark:hover:text-blue-400'>Services</a></li>
                    </ul>
                </motion.div>

                {/* Available Cities */}
                <motion.div variants={itemVariants}>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Available City</h3>
                    <ul className="space-y-2">
                        <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Delhi</li>
                        <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Mumbai</li>
                        <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Noida</li>
                        <li className='hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>Indore</li>
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div variants={itemVariants}>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                        <li className='flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition'>
                            <MdEmail /><span>abc123@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition'>
                            <IoCall /><span>+91-3456784567</span>
                        </li>
                        <li className='flex items-start gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition'>
                            <FaLocationDot />
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.div
                className='max-w-7xl m-auto mt-4 md:flex justify-between text-gray-500 dark:text-gray-400 text-sm'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>© 2025 Clinic. All rights reserved.</p>
                <p>Made with ❤️ by Webseeder Technologies</p>
            </motion.div>
        </footer>
    )
}

export default Footer
