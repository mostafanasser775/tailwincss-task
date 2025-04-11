'use client'

import React, { useState, useRef } from 'react';
import ProductCard from './ProductCard';

import Link from 'next/link';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  products: any[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  viewAllLink,
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
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary/20"></span>
            </h2>
            {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
          </div>
          
          {viewAllLink && (
            <Link 
              href={viewAllLink} 
              className="flex items-center mt-2 font-medium md:mt-0 text-primary hover:text-primary-dark"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
        
        {/* Category tabs */}
        <div className="relative mb-6">
          <div className="flex items-center mb-4">
            <div className="hidden mr-2 md:flex">
              <button 
                onClick={() => scroll('left')}
                className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div 
              ref={scrollContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                    activeTab === category 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="hidden ml-2 md:flex">
              <button 
                onClick={() => scroll('right')}
                className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Products grid with animation */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                isNew={product.isNew}
                isFeatured={product.isFeatured}
                discount={product.discount}
                brand={product.brand}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile view more button */}
        <div className="mt-8 text-center md:hidden">
          {viewAllLink && (
            <Link 
              href={viewAllLink} 
              className="inline-block px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View More Products
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

