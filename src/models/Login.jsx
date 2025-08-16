import React, { useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";

const Login = ({ closeModel }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    return (
        <div className="fixed inset-0 flex items-center justify-center h-[100vh] bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 overflow-hidden">
            <div className="popup-form shadow-gray-400 shadow-2xl rounded-md border border-gray-200 dark:border-gray-700">
                <form className="relative w-80 md:w-96 space-y-5 bg-white dark:bg-gray-900 p-5 rounded-md">
                    {/* Heading */}
                    <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 text-center">
                        Login
                    </h1>

                    {/* First Name */}
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            className="py-3 px-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            className="py-3 px-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter Your E-mail"
                            className="py-3 px-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="py-3 px-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Login Button */}
                    <div className="flex items-center justify-center">
                        <button
                            className="group relative bg-[#5044E5]  flex items-center justify-center  cursor-pointer text-white rounded-full w-24 h-10 overflow-hidden"
                        >
                            {/* Text */}
                            <span className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0">
                                Login
                            </span>

                            {/* Icon */}
                            <IoLogInOutline
                                size={20}
                                className="absolute transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                            />
                        </button>
                    </div>

                </form>

                {/* Close Button */}
                <button
                    onClick={closeModel}
                    className="absolute top-2 right-2 text-2xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                >
                    <IoIosClose />
                </button>
            </div>
        </div>
    );
};

export default Login;
