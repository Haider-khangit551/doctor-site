


// import React, { useState } from 'react'
// import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from 'framer-motion';
// import Title from './Title';

// const faqData = [
//     {
//         question: "What is a Clinic Management System?",
//         answer: "A Clinic Management System is software that helps clinics manage patient records, appointments, billing, prescriptions, and staff efficiently in one centralized platform.",
//         id: 1
//     },
//     {
//         question: "Can I book appointments online using this system?",
//         answer: "Yes, the system allows patients to schedule appointments online, view doctor availability, and receive confirmation notifications.",
//         id: 2
//     },
//     {
//         question: "Is patient data stored securely?",
//         answer: "Absolutely. All patient data is encrypted and stored securely following healthcare data protection standards and compliance regulations like HIPAA.",
//         id: 3
//     },
//     {
//         question: "Can doctors access medical records during consultations?",
//         answer: "Yes, doctors can securely access patient medical history, prescriptions, and test results in real time to provide informed care during appointments.",
//         id: 4
//     },
//     {
//         question: "Is there support for managing billing and invoices?",
//         answer: "Yes, the system includes billing modules that help generate invoices, track payments, manage insurance claims, and reduce manual work.",
//         id: 5
//     }
// ];

// const Faq = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     return (
//         <div className='mt-12 px-4'>
//             <Title title='Frequently Asked Questions' />
//             <div className='min-h-screen flex bg-white dark:bg-black  justify-center items-center px-4 py-10 transition-colors duration-300'>
//                 <div className='w-full max-w-3xl bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md transition-colors duration-300'>

//                     {faqData.map((q) => (
//                         <div key={q.id} className='mb-4 last:mb-0'>
//                             <div className="group rounded-lg border border-transparent hover:border-indigo-400 hover:shadow-md transition-all duration-300">
//                                 <button
//                                     className='w-full text-left text-lg sm:text-xl flex justify-between items-center p-3 sm:p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none transition-colors duration-300'
//                                     onClick={() => setActiveIndex(activeIndex === q.id ? null : q.id)}
//                                 >
//                                     <span className="pr-4">{q.question}</span>
//                                     {activeIndex === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
//                                 </button>

//                                 <AnimatePresence initial={false}>
//                                     {activeIndex === q.id && (
//                                         <motion.div
//                                             key={q.id}
//                                             initial={{ opacity: 0, height: 0 }}
//                                             animate={{ opacity: 1, height: "auto" }}
//                                             exit={{ opacity: 0, height: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className='overflow-hidden'
//                                         >
//                                             <div className='mt-2 text-gray-700 dark:text-gray-300 ml-2 sm:ml-4 pb-2 transition-colors duration-300'>
//                                                 <p className="text-sm sm:text-base">{q.answer}</p>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Faq;





// import React, { useState } from 'react'
// import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from 'framer-motion'
// import Title from './Title';

// const faqData = [
//     {
//         question: "What is a Clinic Management System?",
//         answer: "A Clinic Management System is software that helps clinics manage patient records, appointments, billing, prescriptions, and staff efficiently in one centralized platform.",
//         id: 1
//     },
//     {
//         question: "Can I book appointments online using this system?",
//         answer: "Yes, the system allows patients to schedule appointments online, view doctor availability, and receive confirmation notifications.",
//         id: 2
//     },
//     {
//         question: "Is patient data stored securely?",
//         answer: "Absolutely. All patient data is encrypted and stored securely following healthcare data protection standards and compliance regulations like HIPAA.",
//         id: 3
//     },
//     {
//         question: "Can doctors access medical records during consultations?",
//         answer: "Yes, doctors can securely access patient medical history, prescriptions, and test results in real time to provide informed care during appointments.",
//         id: 4
//     },
//     {
//         question: "Is there support for managing billing and invoices?",
//         answer: "Yes, the system includes billing modules that help generate invoices, track payments, manage insurance claims, and reduce manual work.",
//         id: 5
//     }
// ];

// const Faq = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     return (
//         <div className="mt-20 px-4">
//             <Title title='Frequently Asked Questions' />
//             <div className='max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md transition-colors duration-300'>
//                 <h2 className='text-2xl sm:text-3xl mb-6 font-semibold text-gray-900 dark:text-gray-100'>
//                     Questions
//                 </h2>
//                 {
//                     faqData.map((q) => (
//                         <div key={q.id} className='mb-4 last:mb-0'>
//                             <button
//                                 className='w-full text-left text-lg sm:text-xl flex justify-between items-center p-3 sm:p-4 
//                                 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 
//                                 rounded-lg shadow-md focus:outline-none 
//                                 border-2 border-transparent hover:border-primary transition-all duration-300'
//                                 onClick={() => setActiveIndex(activeIndex === q.id ? null : q.id)}
//                             >
//                                 <span className="pr-4">{q.question}</span>
//                                 {activeIndex === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
//                             </button>

//                             <AnimatePresence initial={false}>
//                                 {activeIndex === q.id && (
//                                     <motion.div
//                                         key={q.id}
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: "auto" }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className='overflow-hidden'
//                                     >
//                                         <div className='mt-2 text-gray-700 dark:text-gray-300 ml-2 sm:ml-4 pb-2 transition-colors duration-300'>
//                                             <p className="text-sm sm:text-base">{q.answer}</p>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Faq;



import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";

const faqData = [
    {
        question: "What is a Clinic Management System?",
        answer:
            "A Clinic Management System is software that helps clinics manage patient records, appointments, billing, prescriptions, and staff efficiently in one centralized platform.",
        id: 1,
    },
    {
        question: "Can I book appointments online using this system?",
        answer:
            "Yes, the system allows patients to schedule appointments online, view doctor availability, and receive confirmation notifications.",
        id: 2,
    },
    {
        question: "Is patient data stored securely?",
        answer:
            "Absolutely. All patient data is encrypted and stored securely following healthcare data protection standards and compliance regulations like HIPAA.",
        id: 3,
    },
    {
        question: "Can doctors access medical records during consultations?",
        answer:
            "Yes, doctors can securely access patient medical history, prescriptions, and test results in real time to provide informed care during appointments.",
        id: 4,
    },
    {
        question: "Is there support for managing billing and invoices?",
        answer:
            "Yes, the system includes billing modules that help generate invoices, track payments, manage insurance claims, and reduce manual work.",
        id: 5,
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="mt-20 px-4">
            <Title title="Frequently Asked Questions" />
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md transition-colors duration-300">
                <h2 className="text-2xl sm:text-3xl mb-6 font-semibold text-gray-900 dark:text-gray-100">
                    Questions
                </h2>

                {faqData.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                        {/* Motion button for smooth hover scale */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="w-full text-left text-lg sm:text-xl flex justify-between items-center p-3 sm:p-4 
                bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                rounded-lg shadow-md focus:outline-none 
                border-2 border-transparent hover:border-primary transition-all duration-300"
                            onClick={() =>
                                setActiveIndex(activeIndex === q.id ? null : q.id)
                            }
                        >
                            <span className="pr-4">{q.question}</span>
                            {activeIndex === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                        </motion.button>

                        {/* AnimatePresence for expand / collapse */}
                        <AnimatePresence initial={false}>
                            {activeIndex === q.id && (
                                <motion.div
                                    key={q.id}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -10, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-2 text-gray-700 dark:text-gray-300 ml-2 sm:ml-4 pb-2 transition-colors duration-300"
                                    >
                                        <p className="text-sm sm:text-base">{q.answer}</p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
