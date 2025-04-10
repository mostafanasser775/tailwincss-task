'use client';
import React from 'react';
import Link from 'next/link';
import { Select, SelectItem } from "@heroui/select";
import { Icon } from '@iconify/react';

import { countries } from './data';

export function Navbar() {
  return (
    <><header className="w-full h-12 bg-gray-100 shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto">
      
        <div className="text-sm text-gray-600">Welcome to our store!</div>
        <div className="flex items-center py-2 space-x-3">
          <Select className="w-32" defaultSelectedKeys={['USA']}
            items={countries}
            labelPlacement="outside-left"
            renderValue={(items) => items.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <Icon height="16" icon={item.data?.iconFlag || ''} width="20" />
                <span>{item?.data?.name}</span>
              </div>
            ))}
            size="sm">
            {(country) => (
              <SelectItem key={country.name} textValue={country.name}>
                <div className="flex items-center gap-2">
                  <Icon height="16" icon={country.iconFlag} width="20" />
                  <div className="flex flex-col">
                    <span className="text-small">{country.name}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
      </div>
    </header>
    <nav className="sticky top-0 z-20 py-4 bg-white shadow-lg ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-2xl font-bold text-primary">
              <Link className="flex items-center text-gray-800 hover:text-primary" href="/">
                <Icon className="w-8 h-8 mr-2" icon="mdi:shopping-outline" />
                ShopMart
              </Link>
            </div>
            <div className="w-full max-w-md md:w-1/2">
              <div className="relative">
                <input
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Search for products..."
                  type="text" />
                <button className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-primary">
                  <Icon className="w-5 h-5" icon="mdi:magnify" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link className="flex flex-col items-center text-gray-600 transition-colors hover:text-primary" href="/compare">
                <div className="relative">
                  <Icon className="w-6 h-6" icon="mdi:scale-balance" />
                  <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-gray-800 bg-gray-200 rounded-full -top-2 -right-2">
                    0
                  </span>
                </div>
                <span className="mt-1 text-xs">Compare</span>
              </Link>
              <Link className="flex flex-col items-center text-gray-600 transition-colors hover:text-primary" href="/wishlist">
                <div className="relative">
                  <Icon className="w-6 h-6" icon="mdi:heart-outline" />
                  <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-gray-800 bg-gray-200 rounded-full -top-2 -right-2">
                    0
                  </span>
                </div>
                <span className="mt-1 text-xs">Wishlist</span>
              </Link>
              <Link className="flex flex-col items-center text-gray-600 transition-colors hover:text-primary" href="/cart">
                <div className="relative">
                  <Icon className="w-6 h-6" icon="mdi:cart-outline" />
                  <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full -top-2 -right-2 bg-primary">
                    2
                  </span>
                </div>
                <span className="mt-1 text-xs">Cart</span>
              </Link>
              <Link className="flex flex-col items-center text-gray-600 transition-colors hover:text-primary" href="/account">
                <Icon className="w-6 h-6" icon="mdi:account-outline" />
                <span className="mt-1 text-xs">Account</span>
              </Link>
            </div>
          </div>
        </div>
      </nav></>
  );
};
