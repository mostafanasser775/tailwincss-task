'use client'

import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/button';
import { motion } from 'framer-motion';

import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: any[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle, products }) => {
  const [activeTab, setActiveTab] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['all', 'featured', 'bestsellers', 'new arrivals', 'sale'];

  const containerVariants = {
    hidden: { opacity: 0.5, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center">
          <div>
            <motion.h2
              className="relative inline-block text-2xl font-bold text-gray-900"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary/20" />
            </motion.h2>
            {subtitle && (
              <motion.p
                className="mt-1 text-gray-600"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          <Button variant="light">
            View All
            <Icon className="w-5 h-5 ml-1" icon="mdi:arrow-right" />
          </Button>
        </div>

        {/* Category tabs */}
        <div className="relative mb-6">
          <div className="flex items-center mb-4">
            <div
              ref={scrollContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                    activeTab === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(category)}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid with animation */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                brand={product.brand}
                discount={product.discount}
                id={product.id}
                image={product.image}
                isFeatured={product.isFeatured}
                isNew={product.isNew}
                name={product.name}
                originalPrice={product.originalPrice}
                price={product.price}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view more button */}
        <div className="mt-8 text-center md:hidden">
          <Button className="inline-block px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
            View More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

