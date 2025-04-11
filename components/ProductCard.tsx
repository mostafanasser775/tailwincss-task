
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
  brand?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew = false,
  isFeatured = false,
  discount,
  brand,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {isNew && (
          <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            NEW
          </span>
        )}
        {discount && (
          <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {isFeatured && (
          <span className="bg-purple-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            FEATURED
          </span>
        )}
      </div>

      {/* Quick actions */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 hover:text-primary transition-colors" title="Add to wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 hover:text-primary transition-colors" title="Quick view">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 hover:text-primary transition-colors" title="Compare">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      </div>

      {/* Product image with hover effect */}
      <div className="relative overflow-hidden">
        <Link href={`/product/${id}`} className="block relative pt-[100%] bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-contain p-6 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Second image on hover - would be implemented with actual second image */}
          {isHovered && originalPrice && (
            <div className="absolute inset-0 bg-gray-50 opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">View Details</span>
            </div>
          )}
        </Link>
        
        {/* Quick add to cart - appears on hover */}
        <div className={`absolute bottom-0 left-0 right-0 bg-primary text-white py-2 text-center text-sm font-medium transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button className="w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        {brand && (
          <Link href={`/brands/${brand.toLowerCase()}`} className="text-xs font-medium text-gray-500 hover:text-primary mb-1 inline-block">
            {brand}
          </Link>
        )}
        
        <Link href={`/product/${id}`} className="block group">
          <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors line-clamp-2 h-10">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mt-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {/* Half star for decimal ratings */}
            {rating % 1 >= 0.5 && Math.floor(rating) < 5 && (
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-300 absolute"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-2 text-yellow-400 absolute overflow-hidden"
                  viewBox="0 0 10 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            )}
          </div>
          <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center">
          <span className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Add to cart button */}
        <button className="mt-3 w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-md transition-colors flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

