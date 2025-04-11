'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/button';
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
      {/*Actions */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <Button isIconOnly className='bg-white' radius='full' variant='shadow'  >
          <Icon className="h-5 w-5" icon="mdi:heart-outline" />
        </Button>
        <Button isIconOnly className='bg-white' radius='full' variant='shadow'  >
          <Icon className="h-5 w-5" icon="mdi:eye-outline" />
        </Button>
        <Button isIconOnly className='bg-white' radius='full' variant='shadow'  >
          <Icon className="h-5 w-5" icon="mdi:compare" />
        </Button>
      </div>

      {/* Product image with hover effect */}
      <div className="relative overflow-hidden">
        <Button className="block relative pt-[100%] bg-gray-50 w-full" >
          <Image fill alt={name}
            className={`object-contain p-6 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            src={image}
          />

          {isHovered && originalPrice && (
            <div className="absolute inset-0 bg-gray-50 opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">View Details</span>
            </div>
          )}
        </Button>

        <div className={`absolute bottom-0 left-0 right-0  text-center text-sm font-medium transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <Button className="w-full" color='primary' radius='none' size='md' variant='solid'>
            <Icon className="h-5 w-5" icon="mdi:cart-outline" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-2">

        <span className="text-xs font-medium text-gray-500 hover:text-primary mb-1" >
          Brand : {brand}
        </span>

        <h3 className="text-sm mt-1 font-medium text-gray-800 group-hover:text-primary line-clamp-2 h-12">
          {name}
        </h3>

        <div className="flex items-center mt-2">

          <div className="flex">

            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                icon="mdi:star"
              />
            ))}

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
        <Button className="mt-4 w-full" color='primary' radius='full' size='md' variant='bordered'>
          <Icon className="h-5 w-5 mr-1" icon="mdi:cart-outline" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

