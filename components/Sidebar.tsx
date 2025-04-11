'use client'

import React, { useState } from 'react';

const priceRanges = [
  { id: 'price-1', label: 'Under $25', value: 'under-25' },
  { id: 'price-2', label: '$25 to $50', value: '25-50' },
  { id: 'price-3', label: '$50 to $100', value: '50-100' },
  { id: 'price-4', label: '$100 to $200', value: '100-200' },
  { id: 'price-5', label: 'Over $200', value: 'over-200' },
];

const colors = [
  { name: 'Black', value: 'black', color: 'bg-black' },
  { name: 'White', value: 'white', color: 'bg-white border border-gray-300' },
  { name: 'Red', value: 'red', color: 'bg-red-500' },
  { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
  { name: 'Green', value: 'green', color: 'bg-green-500' },
  { name: 'Yellow', value: 'yellow', color: 'bg-yellow-400' },
  { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
  { name: 'Pink', value: 'pink', color: 'bg-pink-500' },
  { name: 'Gray', value: 'gray', color: 'bg-gray-500' },
];

const brands = [
  { id: 'brand-1', name: 'Apple', count: 42 },
  { id: 'brand-2', name: 'Samsung', count: 36 },
  { id: 'brand-3', name: 'Sony', count: 28 },
  { id: 'brand-4', name: 'LG', count: 21 },
  { id: 'brand-5', name: 'Dell', count: 19 },
  { id: 'brand-6', name: 'Asus', count: 17 },
  { id: 'brand-7', name: 'Lenovo', count: 15 },
  { id: 'brand-8', name: 'HP', count: 14 },
  { id: 'brand-9', name: 'Acer', count: 12 },
  { id: 'brand-10', name: 'Microsoft', count: 10 },
];

const ratings = [5, 4, 3, 2, 1];

const categories = [
  { id: 'cat-1', name: 'Electronics', count: 120 },
  { id: 'cat-2', name: 'Clothing', count: 85 },
  { id: 'cat-3', name: 'Home & Kitchen', count: 74 },
  { id: 'cat-4', name: 'Beauty & Personal Care', count: 62 },
  { id: 'cat-5', name: 'Sports & Outdoors', count: 48 },
];

const Sidebar = () => {
  // State for collapsible sections
  const [openSections, setOpenSections] = useState({
    price: true,
    color: true,
    brand: true,
    rating: true,
    availability: true,
    category: true,
  });

  // State for selected filters
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Toggle section visibility
  const toggleSection = (section: string) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section as keyof typeof openSections],
    });
  };

  // Handle color selection
  const toggleColor = (colorValue: string) => {
    if (selectedColors.includes(colorValue)) {
      setSelectedColors(selectedColors.filter(c => c !== colorValue));
    } else {
      setSelectedColors([...selectedColors, colorValue]);
    }
  };

  // Handle brand selection
  const toggleBrand = (brandId: string) => {
    if (selectedBrands.includes(brandId)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brandId));
    } else {
      setSelectedBrands([...selectedBrands, brandId]);
    }
  };

  // Handle rating selection
  const toggleRating = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  // Handle availability selection
  const toggleAvailability = (value: string) => {
    if (availability.includes(value)) {
      setAvailability(availability.filter(a => a !== value));
    } else {
      setAvailability([...availability, value]);
    }
  };

  // Handle category selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedColors([]);
    setPriceRange({ min: '', max: '' });
    setSelectedBrands([]);
    setSelectedRatings([]);
    setAvailability([]);
    setSelectedCategories([]);
  };

  return (
    <aside className="w-full p-5 bg-white border border-gray-100 shadow-sm lg:w-64 rounded-xl">
      <div className="space-y-6">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button 
            className="text-sm text-primary hover:underline"
            onClick={clearAllFilters}
          >
            Clear All
          </button>
        </div>

        {/* Active Filters */}
        {(selectedColors.length > 0 || selectedBrands.length > 0 || selectedRatings.length > 0 || availability.length > 0 || selectedCategories.length > 0 || priceRange.min || priceRange.max) && (
          <div className="pt-4 border-t">
            <h3 className="flex items-center mb-2 font-medium text-gray-700">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              Active Filters
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedColors.map(color => {
                const colorObj = colors.find(c => c.value === color);

                return (
                  <div key={color} className="flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full">
                    <span className={`w-3 h-3 rounded-full ${colorObj?.color} mr-1`} />
                    <span>{colorObj?.name}</span>
                    <button 
                      className="ml-1 text-gray-500 hover:text-gray-700"
                      onClick={() => toggleColor(color)}
                    >
                      ×
                    </button>
                  </div>
                );
              })}
              {(priceRange.min || priceRange.max) && (
                <div className="flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full">
                  <span>${priceRange.min || '0'} - ${priceRange.max || '∞'}</span>
                  <button 
                    className="ml-1 text-gray-500 hover:text-gray-700"
                    onClick={() => setPriceRange({ min: '', max: '' })}
                  >
                    ×
                  </button>
                </div>
              )}
              {/* Other active filters would be shown here */}
            </div>
          </div>
        )}

        {/* Categories Filter */}
        <div className="pt-4 border-t">
          <div 
            className="flex items-center justify-between cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => toggleSection('category')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSection('category')}
          >
            <h3 className="font-medium text-gray-700">Categories</h3>
            <svg 
              className={`h-5 w-5 transition-transform ${openSections.category ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor"  viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          {openSections.category && (
            <div className="mt-3 space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      checked={selectedCategories.includes(category.id)}
                      className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      id={category.id}
                      type="checkbox"
                      onChange={() => toggleCategory(category.id)}
                    />
                    <label className="ml-2 text-sm text-gray-700" htmlFor={category.id}>
                      {category.name}
                    </label>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="pt-4 border-t">
          <div 
            className="flex items-center justify-between cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => toggleSection('price')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSection('price')}
          >
            <h3 className="font-medium text-gray-700">Price Range</h3>
            <svg 
              className={`h-5 w-5 transition-transform ${openSections.price ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          {openSections.price && (
            <>
              <div className="mt-3 space-y-2">
                {priceRanges.map((range) => (
                  <div key={range.id} className="flex items-center">
                    <input
                      checked={
                        (range.value === 'under-25' && Number(priceRange.max) <= 25) ||
                        (range.value === '25-50' && Number(priceRange.min) >= 25 && Number(priceRange.max) <= 50) ||
                        (range.value === '50-100' && Number(priceRange.min) >= 50 && Number(priceRange.max) <= 100) ||
                        (range.value === '100-200' && Number(priceRange.min) >= 100 && Number(priceRange.max) <= 200) ||
                        (range.value === 'over-200' && Number(priceRange.min) >= 200)
                      }
                      className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      id={range.id}
                      type="checkbox"
                      onChange={() => {
                        switch(range.value) {
                          case 'under-25':
                            setPriceRange({ min: '0', max: '25' });
                            break;
                          case '25-50':
                            setPriceRange({ min: '25', max: '50' });
                            break;
                          case '50-100':
                            setPriceRange({ min: '50', max: '100' });
                            break;
                          case '100-200':
                            setPriceRange({ min: '100', max: '200' });
                            break;
                          case 'over-200':
                            setPriceRange({ min: '200', max: '' });
                            break;
                        }
                      }}
                    />
                    <label className="ml-2 text-sm text-gray-700" htmlFor={range.id}>
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex mt-4 space-x-2">
                <div className="w-1/2">
                  <label className="sr-only" htmlFor="min-price">Minimum Price</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">$</span>
                    <input
                      className="w-full border border-gray-300 rounded pl-6 pr-2 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                      id="min-price"
                      placeholder="Min"
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="sr-only" htmlFor="max-price">Maximum Price</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">$</span>
                    <input
                      className="w-full border border-gray-300 rounded pl-6 pr-2 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                      id="max-price"
                      placeholder="Max"
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <button 
                className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 rounded text-sm transition-colors"
                onClick={() => {
                  if (priceRange.min || priceRange.max) {
                    // Apply price filter logic here
                  }
                }}
              >
                Apply Price
              </button>
            </>
          )}
        </div>

        {/* Color Filter */}
        <div className="pt-4 border-t">
          <div 
            className="flex items-center justify-between cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => toggleSection('color')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSection('color')}
          >
            <h3 className="font-medium text-gray-700">Color</h3>
            <svg 
              className={`h-5 w-5 transition-transform ${openSections.color ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          {openSections.color && (
            <div className="flex flex-wrap gap-2 mt-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  className="relative group"
                  title={color.name}
                  onClick={() => toggleColor(color.value)}
                >
                  <span className={`block w-8 h-8 rounded-full ${color.color}`} />
                  <span className={`absolute inset-0 rounded-full border-2 ${selectedColors.includes(color.value) ? 'border-primary opacity-100' : 'border-transparent opacity-0 group-hover:border-gray-300 group-hover:opacity-100'}`} />
                  {selectedColors.includes(color.value) && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="pt-4 border-t">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('brand')}
          >
            <h3 className="font-medium text-gray-700">Brand</h3>
            <svg 
              className={`h-5 w-5 transition-transform ${openSections.brand ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          {openSections.brand && (
            <>
              <div className="mt-2 mb-3">
                <div className="relative">
                  <input
                    className="w-full border border-gray-300 rounded pl-8 pr-2 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Search brands..."
                    type="text"
                  />
                  <svg className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-2 top-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
              </div>
              <div className="pr-2 space-y-2 overflow-y-auto max-h-48 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        checked={selectedBrands.includes(brand.id)}
                        className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                        id={brand.id}
                        type="checkbox"
                        onChange={() => toggleBrand(brand.id)}
                      />
                      <label className="ml-2 text-sm text-gray-700" htmlFor={brand.id}>
                        {brand.name}
                      </label>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                      {brand.count}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Rating Filter */}
        <div className="pt-4 border-t">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('rating')}
          >
            <h3 className="font-medium text-gray-700">Customer Rating</h3>
            <svg 
              className={`h-5 w-5 transition-transform ${openSections.rating ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          {openSections.rating && (
            <div className="mt-3 space-y-2">
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center">
                  <input
                    checked={selectedRatings.includes(rating)}
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    id={`rating-${rating}`}
                    type="checkbox"
                    onChange={() => toggleRating(rating)}
                  />
                  <label className="flex items-center ml-2" htmlFor={`rating-${rating}`}>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">& Up</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Availability Filter */}
        <div className="pt-4 border-t">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('availability')}
          >
            <h3 className="font-medium text-gray-700">Availability</h3>
            <svg 
              className={`h-5 w-5 transition-transform ${openSections.availability ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          {openSections.availability && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <input
                  checked={availability.includes('in-stock')}
                  className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  id="in-stock"
                  type="checkbox"
                  onChange={() => toggleAvailability('in-stock')}
                />
                <label className="ml-2 text-sm text-gray-700" htmlFor="in-stock">
                  In Stock
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={availability.includes('out-of-stock')}
                  className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                  id="out-of-stock"
                  type="checkbox"
                  onChange={() => toggleAvailability('out-of-stock')}
                />
                <label className="ml-2 text-sm text-gray-700" htmlFor="out-of-stock">
                  Out of Stock
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Apply Filters Button (Mobile) */}
        <div className="pt-4 lg:hidden">
          <button className="w-full py-2 text-white transition-colors rounded-md bg-primary hover:bg-primary/90">
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

