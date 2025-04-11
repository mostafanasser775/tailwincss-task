'use client'

import React from 'react';
import { Icon } from '@iconify/react';
import { Accordion, AccordionItem } from '@heroui/accordion';
import { Checkbox } from '@heroui/checkbox';
import { Input } from '@heroui/input';
import { motion } from 'framer-motion';

import { colors, priceRanges, ratings, sidebrands, sidecategories } from './data';

const Sidebar = ({ismob}:{ismob?:boolean}) => {
  return (
    <motion.aside
      animate={{ opacity: 1 }}
      className={` p-5 bg-white  ${!ismob &&"border border-gray-100 shadow-sm"}  w-full min-w-80 rounded-xl`}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate="visible"
        className="space-y-6"
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {/* Filter Header */}
        <motion.div
          className="flex items-center justify-between"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button className="text-sm text-primary hover:underline">Clear All</button>
        </motion.div>

        <Accordion isCompact
          defaultExpandedKeys={['categories', 'brand', 'price-range', 'color', 'rating']}
          selectionMode="multiple"
        >
          <AccordionItem key="categories" title="Categories">
            <motion.div
              className="my-2 space-y-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {sidecategories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox radius="sm" size="md">{category.name}</Checkbox>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </div>
              ))}
            </motion.div>
          </AccordionItem>

          {/* Price Range Filter */}
          <AccordionItem key="price-range" title="Price Range">
            <motion.div
              className="my-2 space-y-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {priceRanges.map((range) => (
                <div key={range.id} className="flex items-center">
                  <Checkbox radius="sm" size="md">{range.label}</Checkbox>
                </div>
              ))}
            </motion.div>
          </AccordionItem>

          {/* Color Filter */}
          <AccordionItem key="color" title="Color">
            <motion.div
              className="flex flex-wrap gap-2 my-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {colors.map((color) => (
                <button key={color.value} className="relative group" title={color.name}>
                  <span className={`block w-8 h-8 rounded-full ${color.color}`} />
                  <span className="absolute inset-0 rounded-full border-2 border-transparent opacity-0 group-hover:border-gray-300 group-hover:opacity-100" />
                </button>
              ))}
            </motion.div>
          </AccordionItem>

          {/* Brand Filter */}
          <AccordionItem key="brand" title="Brand">
            <motion.div
              className="mb-2 space-y-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <div className="relative">
                <Input
                  placeholder="Search brand..."
                  radius="sm"
                  startContent={
                    <Icon className="w-5 h-5 text-gray-400" icon="mdi:magnify" />
                  }
                  variant="bordered"
                />
              </div>
            </motion.div>
            <motion.div
              className="pr-2 space-y-3 mb-2 overflow-y-auto max-h-48 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {sidebrands.map((brand) => (
                <div key={brand.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox radius="sm" size="md">{brand.name}</Checkbox>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {brand.count}
                  </span>
                </div>
              ))}
            </motion.div>
          </AccordionItem>

          {/* Rating Filter */}
          <AccordionItem key="rating" title="Customer Rating">
            <motion.div
              className="my-2 space-y-3"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center">
                  <Checkbox radius="sm" size="md">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          icon="mdi:star"
                        />
                      ))}
                    </div>
                  </Checkbox>
                </div>
              ))}
            </motion.div>
          </AccordionItem>

          {/* Availability Filter */}
          <AccordionItem key="availability" title="Availability">
            <motion.div
              className="my-2 space-y-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <div className="flex items-center">
                <Checkbox radius="sm" size="md">In Stock</Checkbox>
              </div>
              <div className="flex items-center">
                <Checkbox radius="sm" size="md">Out of Stock</Checkbox>
              </div>
            </motion.div>
          </AccordionItem>
        </Accordion>

        {/* Apply Filters Button (Mobile) */}
        <motion.div
          className="pt-4 lg:hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <button className="w-full py-2 text-white transition-colors rounded-md bg-primary hover:bg-primary/90">
            Apply Filters
          </button>
        </motion.div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;

