'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@heroui/button';
import { Icon } from '@iconify/react';

interface Brand {
  id: string;
  name: string;
  logo: string;
}

interface BrandSectionProps {
  brands: Brand[];
}

const BrandSection: React.FC<BrandSectionProps> = ({ brands }) => {
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll logic
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        if (scrollLeft >= scrollWidth - clientWidth) {
          containerRef.current.scrollTo({ left: 0 }); // Reset to the start without smooth behavior
        } else {
          containerRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }
    }, 20); // Adjust the interval speed as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Trusted Brands</h2>
            <p className="text-gray-600 mt-1">Shop from the best brands in the industry</p>
          </div>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          >
            {brands.map((brand) => (
              <Button
                key={brand.id}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-28 w-40 border border-gray-100 group"
                onMouseEnter={() => setIsHovering(brand.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className="relative h-16 w-full transition-transform duration-300 group-hover:scale-110">
                  <Image fill alt={brand.name} className="object-contain" src={brand.logo} />
                  {isHovering === brand.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 transition-opacity duration-300">
                      <span className="text-primary font-medium text-sm">View Products</span>
                    </div>
                  )}
                </div>
              </Button>
            ))}
          </div>


        </div>

        <div className="mt-8 text-center">
          <Button color='primary' size='lg' variant='light'>

            View All Brands
            <Icon
              className="h-5 w-5 ml-1"
              icon="mdi:arrow-right"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

