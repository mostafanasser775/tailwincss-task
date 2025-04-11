'use client'

import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/button';

import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: any[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,

  products,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Get unique categories from products (for demo purposes)
  const categories = ['all', 'featured', 'bestsellers', 'new arrivals', 'sale'];

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center">
          <div>
            <h2 className="relative inline-block text-2xl font-bold text-gray-900">
              {title}
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary/20" />
            </h2>
            {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
          </div>

          <Button variant='light'>
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
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${activeTab === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>


          </div>
        </div>

        {/* Products grid with animation */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
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
            </div>
          ))}
        </div>

        {/* Mobile view more button */}
        <div className="mt-8 text-center md:hidden">
          <Button
            className="inline-block px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

