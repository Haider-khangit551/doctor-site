// import React, { useState } from 'react'
// import assets from '../assets/assets'
// // import ThemeToggleBtn from './ThemeToggleBtn'
// import { motion } from "motion/react"
// import Login from '../models/Login'
// import { IoLogInOutline } from "react-icons/io5";


// const Navbar = ({ theme, setTheme }) => {

//     const [sideBarOpen, setSideBarOpen] = useState(false)
//     const [isModelOpen, setIsModelOpen] = useState(false)

//     const openModel = () => {
//         setIsModelOpen(true)
//     }

//     const closeModel = () => {
//         setIsModelOpen(false)
//     }

//     return (
//         // <motion.div
//         //     initial={{ opacity: 0, y: -50 }}
//         //     animate={{ opacity: 1, y: 0 }}
//         //     transition={{ duration: 0.6, ease: 'easeOut' }}
//         //     className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
//         <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 fixed top-0 left-0 right-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'
//         >


//             {
//                 theme === "dark" ?
//                     <p className='text-white text-2xl'>HealthCare</p>
//                     : <p className='text-black text-2xl'>HealthCare</p>
//             }

//             {/* Sidebar (small devices) */}
//             <div className={`text-gray-700 dark:text-white sm:text-sm ${!sideBarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}  
//                  max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col 
//                  max-sm:bg-[#5044E5] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

//                 {/* Close Icon */}
//                 <img
//                     src={assets.close_icon}
//                     className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
//                     alt="close"
//                     onClick={() => setSideBarOpen(false)}
//                 />

//                 {/* Sidebar Links */}
//                 <a onClick={() => setSideBarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
//                 <a onClick={() => setSideBarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
//                 <a onClick={() => setSideBarOpen(false)} href="#testimonial" className='sm:hover:border-b'>Testimonial</a>
//                 <a onClick={() => setSideBarOpen(false)} href="#about" className='sm:hover:border-b'>About us</a>
//                 <a onClick={() => setSideBarOpen(false)} href="#contact" className='sm:hover:border-b'>Contact us</a>

//                 {/* Sidebar Login Btn (only small devices) */}
//                 <button
//                     onClick={() => { openModel(); setSideBarOpen(false); }}
//                     className="mt-6 w-[90px] bg-white text-[#5044E5] flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all sm:hidden"
//                 >
//                     Login
//                 </button>
//             </div>

//             {/* Right Side (theme toggle + login for large devices) */}
//             <div className='flex items-center justify-center gap-3 '>
//                 {/* <ThemeToggleBtn theme={theme} setTheme={setTheme} /> */}
//                 <img
//                     className='w-8 sm:hidden cursor-pointer gap-2 sm:gap-8'
//                     src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
//                     onClick={() => setSideBarOpen(true)}
//                     alt="menu"
//                 />

//                 {/* Large Devices Login Btn */}
//                 <div className="hidden lg:flex">
//                     <button
//                         onClick={openModel}
//                         className="group relative bg-[#5044E5] flex items-center justify-center cursor-pointer text-white rounded-full w-24 h-10 overflow-hidden"
//                     >
//                         <span className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0">
//                             Login
//                         </span>
//                         <IoLogInOutline
//                             size={20}
//                             className="absolute transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out"
//                         />
//                     </button>
//                 </div>
//             </div>

//             {/* Login Model */}
//             {isModelOpen && <Login closeModel={closeModel} />}
//         </motion.div>
//     )
// }

// export default Navbar



import React, { useState } from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"
import Login from '../models/Login'
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)

    const openModel = () => {
        setIsModelOpen(true)
    }

    const closeModel = () => {
        setIsModelOpen(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 fixed top-0 left-0 right-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'
        >

            {/* Logo / Brand */}
            <p className='text-gray-900 dark:text-white text-2xl font-semibold'>
                HealthCare
            </p>

            {/* Sidebar (small devices) */}
            <div
                className={`text-gray-700 dark:text-white sm:text-sm ${!sideBarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}  
                 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col 
                 max-sm:bg-[#5044E5] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
            >

                {/* Close Icon */}
                <img
                    src={assets.close_icon}
                    className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
                    alt="close"
                    onClick={() => setSideBarOpen(false)}
                />

                {/* Sidebar Links */}
                <a onClick={() => setSideBarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
                <a onClick={() => setSideBarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
                <a onClick={() => setSideBarOpen(false)} href="#testimonial" className='sm:hover:border-b'>Testimonial</a>
                <a onClick={() => setSideBarOpen(false)} href="#about" className='sm:hover:border-b'>About us</a>
                <a onClick={() => setSideBarOpen(false)} href="#contact" className='sm:hover:border-b'>Contact us</a>

                {/* Sidebar Login Btn (only small devices) */}
                <button
                    onClick={() => { openModel(); setSideBarOpen(false); }}
                    className="mt-6 w-[90px] bg-white text-[#5044E5] flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all sm:hidden"
                >
                    Login
                </button>
            </div>

            {/* Right Side (Menu + Login) */}
            <div className='flex items-center justify-center gap-3 '>
                {/* Menu Icon (only small devices) */}
                <img
                    className='w-8 sm:hidden cursor-pointer'
                    src={assets.menu_icon}
                    onClick={() => setSideBarOpen(true)}
                    alt="menu"
                />

                {/* Large Devices Login Btn */}
                <div className="hidden lg:flex">
                    <button
                        onClick={openModel}
                        className="group relative bg-[#5044E5] flex items-center justify-center cursor-pointer text-white rounded-full w-24 h-10 overflow-hidden"
                    >
                        <span className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0">
                            Login
                        </span>
                        <IoLogInOutline
                            size={20}
                            className="absolute transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                        />
                    </button>
                </div>
            </div>

            {/* Login Model */}
            {isModelOpen && <Login closeModel={closeModel} />}
        </motion.div>
    )
}

export default Navbar
