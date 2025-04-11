'use client'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export function Features() {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const hoverVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            borderColor: "#3b82f6", // Tailwind's primary color
            transition: { duration: 0.3 },
        },
    };

    const iconHoverVariants = {
        hover: {
            scale: 1.2,
            color: "#3b82f6", // Tailwind's primary color
            transition: { duration: 0.3 },
        },
    };

    const textHoverVariants = {
        hover: {
            color: "#3b82f6", // Tailwind's primary color
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container px-4 mx-auto">
                <h2 className="mb-10 text-2xl font-bold text-center">Why Shop With Us</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: "mdi:truck-fast-outline",
                            title: "Free Shipping",
                            description: "Free shipping on all orders over $50",
                        },
                        {
                            icon: "mdi:clock-outline",
                            title: "24/7 Support",
                            description: "Round the clock customer support",
                        },
                        {
                            icon: "mdi:lock-outline",
                            title: "Secure Payment",
                            description: "100% secure payment methods",
                        },
                        {
                            icon: "mdi:refresh-circle",
                            title: "Easy Returns",
                            description: "30-day money-back guarantee",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 text-center bg-white rounded-lg shadow-sm border border-gray-200"
                            initial="hidden"
                            variants={cardVariants}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover="hover"
                            whileInView="visible"
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary"
                                variants={iconHoverVariants}
                            >
                                <Icon className="w-6 h-6" icon={feature.icon} />
                            </motion.div>
                            <motion.h3
                                className="mb-2 text-lg font-semibold"
                                variants={textHoverVariants}
                            >
                                {feature.title}
                            </motion.h3>
                            <motion.p
                                className="text-gray-600"
                                variants={textHoverVariants}
                            >
                                {feature.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}