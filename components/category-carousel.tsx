'use client'
import React from 'react';
import { Icon } from "@iconify/react";
import { Button } from '@heroui/button';
import { CardBody, Card } from '@heroui/card';
import { Image } from '@heroui/image';
import { motion } from 'framer-motion';

import { categories } from './data';

export const CategoryCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsPerView = 4;
    const maxIndex = categories.length - itemsPerView;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
    };

    const visibleCategories = React.useMemo(() => {
        return categories.slice(currentIndex, currentIndex + itemsPerView);
    }, [currentIndex]);

    return (
        <div className="w-full bg-content2 py-8 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative overflow-hidden px-14">
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4"
                        initial={{ opacity: 0.4, y: 50 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        {visibleCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                className="transition-transform"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="border ripple" shadow="none" radius='none'>

                                    <CardBody>
                                        <div className="relative bg-transparent group flex justify-center">
                                            <Image
                                                alt={category.name}
                                                className="w-full bg-transparent aspect-[4/3] object-contain !rounded-none"
                                                src={category.image}
                                            />
                                            <motion.div
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                                                initial={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span className="text-white text-lg font-semibold">
                                                    {category.name}
                                                </span>
                                            </motion.div>
                                        </div>
                                        <div className="p-4 text-center">
                                            <h3 className="text-medium font-medium">
                                                {category.name}
                                            </h3>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                <Button isIconOnly
                    className="absolute top-1/2 left-4 -translate-y-1/2 z-50"
                    isDisabled={currentIndex === 0}
                    radius="full" size='lg' variant="solid"
                    onPress={handlePrev}
                >
                    <Icon icon="lucide:chevron-left" width={24} />
                </Button>
                <Button isIconOnly className="absolute top-1/2 right-4 -translate-y-1/2 z-50" isDisabled={currentIndex === maxIndex}
                    radius="full" size='lg'
                    variant="solid" onPress={handleNext}
                >
                    <Icon icon="lucide:chevron-right" width={24} />
                </Button>

                {/* Indicators */}
                <motion.div
                    animate={{ opacity: 1 }}
                    className="flex justify-center mt-6 gap-2 z-50 relative"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <Button
                            key={index}
                            isIconOnly
                            className="min-w-unit-8 h-unit-2 h-2 w-8 hover:scale-110 transition-transform"
                            color="primary"
                            radius="full"
                            size="sm"
                            variant={currentIndex === index ? "solid" : "bordered"}
                            onPress={() => setCurrentIndex(index)}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};