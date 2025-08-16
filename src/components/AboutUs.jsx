import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const AboutUs = () => {
    return (
        <section
            id="about"
            className="py-16 bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">


                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Who we are?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We simplify healthcare management with smart solutions that improve efficiency, collaboration, and patient care.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-400">
                            Our Clinic Management System is designed to simplify hospital and
                            clinic operations. From managing patient records to scheduling
                            appointments and improving doctor-patient communication — we make
                            healthcare management smarter and more efficient.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            With advanced features like real-time data access, appointment
                            reminders, and easy billing, our platform helps healthcare providers
                            save time and focus on what matters most — patient care.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src={assets.aboutus}
                            alt="Clinic team"
                            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
