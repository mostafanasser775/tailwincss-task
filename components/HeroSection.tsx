'use client';
import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="relative overflow-hidden border-t shadow-teal-100 bg-gradient-to-r from-gray-50 to-blue-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 -mt-16 -mr-32 rounded-full w-96 h-96 bg-primary/5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 -mb-10 -ml-20 rounded-full bg-secondary/5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute w-20 h-20 rounded-full top-1/3 left-1/4 bg-accent/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bottom-1/4 right-1/3 bg-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </div>

      <div className="container px-4 py-12 mx-auto md:py-20">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            className="relative z-10 order-2 md:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Summer Sale 2025
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Discover the Latest <span className="relative text-primary">
                Trends
                <span className="absolute left-0 w-full h-2 bottom-1 bg-primary/20 -z-10" />
              </span> in Fashion
            </h1>
            <p className="max-w-lg mb-8 text-lg text-gray-600">
              Shop our new collection of premium products at unbeatable prices. Limited time offers available now!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  color="primary"
                  endContent={<Icon className="w-5 h-5" icon="mdi:arrow-right" />}
                  radius="full"
                  size="lg"
                  variant="shadow"
                >
                  Shop Now
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-white"
                  color="default"
                  radius="full"
                  size="lg"
                  variant="shadow"
                >
                  New Arrivals
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.div
                className="p-3 text-center bg-white rounded-lg shadow-sm"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-gray-500">Brands</div>
              </motion.div>
              <motion.div
                className="p-3 text-center bg-white rounded-lg shadow-sm"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-xs text-gray-500">Products</div>
              </motion.div>
              <motion.div
                className="p-3 text-center bg-white rounded-lg shadow-sm"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center mt-8 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 overflow-hidden bg-gray-200 border-2 border-white rounded-full" />
                <div className="w-10 h-10 overflow-hidden bg-gray-300 border-2 border-white rounded-full" />
                <div className="w-10 h-10 overflow-hidden bg-gray-400 border-2 border-white rounded-full" />
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Trusted by 10,000+</span> customers worldwide
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 md:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative h-[350px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-white shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="relative w-full h-full">
                  <Image
                    fill
                    alt="Premium Product"
                    className="object-contain p-4 rounded-large"
                    src="https://img.freepik.com/free-photo/discount-headphones-podium_23-2150165470.jpg?t=st=1744320334~exp=1744323934~hmac=42bb0e99b4d2b1f76ce5004929e56f07cbc1cbf84903d5dccc8f0a54b3fe97fc&w=826"
                  />
                </div>
              </div>

              <motion.div
                className="absolute px-3 py-1 text-sm font-bold text-white bg-red-500 rounded-full top-4 left-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                -30% OFF
              </motion.div>

              <motion.div
                className="absolute flex items-center p-3 bg-white rounded-lg shadow-md top-4 right-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="p-2 mr-3 bg-green-100 rounded-full">
                  <Icon className="w-5 h-5 text-green-600" icon="mdi:check" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Free shipping</p>
                  <p className="text-sm font-medium">On all orders over $50</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute p-3 bg-white rounded-lg shadow-md bottom-4 left-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} className="w-4 h-4 text-yellow-400" icon="mdi:star" />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">(2,500+)</span>
                </div>
                <p className="text-sm font-medium">Trusted by thousands</p>
              </motion.div>

              <motion.div
                className="absolute p-3 rounded-lg shadow-md bottom-4 right-4 bg-white/90 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <p className="text-sm font-semibold">Premium Headphones</p>
                <div className="flex items-center mt-1">
                  <p className="font-bold text-primary">$129.99</p>
                  <p className="ml-2 text-xs text-gray-500 line-through">$199.99</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

