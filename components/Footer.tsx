import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

const FooterSection = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link className="text-gray-300 hover:text-primary transition-colors flex items-center" href={link.href}>
            <Icon className="h-3 w-3 mr-2" icon="mdi:chevron-right" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: 'Shop Categories',
      links: [
        { href: '/', label: 'Electronics' },
        { href: '/', label: 'Fashion' },
        { href: '/', label: 'Home & Garden' },
        { href: '/', label: 'Beauty' },
        { href: '/', label: 'Sports' },
        { href: '/', label: 'Toys & Games' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { href: '/', label: 'Contact Us' },
        { href: '/', label: 'FAQs' },
        { href: '/', label: 'Returns & Refunds' },
        { href: '/', label: 'Shipping Policy' },
        { href: '/', label: 'Track Order' },
        { href: '/', label: 'Help Center' },
      ],
    },
    {
      title: 'My Account',
      links: [
        { href: '/', label: 'Sign In' },
        { href: '/', label: 'Register' },
        { href: '/', label: 'View Cart' },
        { href: '/', label: 'My Wishlist' },
        { href: '/', label: 'Order History' },
        { href: '/', label: 'Compare Products' },
      ],
    },
    {
      title: 'Information',
      links: [
        { href: '/', label: 'About Us' },
        { href: '/', label: 'Privacy Policy' },
        { href: '/', label: 'Terms & Conditions' },
        { href: '/', label: 'Blog' },
        { href: '/', label: 'Careers' },
        { href: '/', label: 'Site Map' },
      ],
    },
  ];

  return (
    <footer className="bg-default-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Section 1: About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Icon className="h-8 w-8 mr-2 text-primary" icon="mdi:shopping-outline" />
              <h3 className="text-xl font-bold">ShopMart</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices with excellent customer service.
            </p>
            <div className="flex space-x-4 mb-6">
              {['mdi:facebook', 'mdi:twitter', 'mdi:instagram', 'mdi:youtube'].map((icon) => (
                <Button key={icon} isIconOnly radius="full" variant="shadow">
                  <Icon className="h-5 w-5" icon={icon} />
                </Button>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p className="flex items-center mb-2">
                <Icon className="h-4 w-4 mr-2" icon="mdi:map-marker" />
                123 Main Street, New York, NY 10001
              </p>
              <p className="flex items-center mb-2">
                <Icon className="h-4 w-4 mr-2" icon="mdi:email-outline" />
                info@shopmart.com
              </p>
              <p className="flex items-center">
                <Icon className="h-4 w-4 mr-2" icon="mdi:phone" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <FooterSection key={section.title} links={section.links} title={section.title} />
          ))}

          {/* Section 6: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to get updates on our latest offers!</p>
            <form className="flex flex-col space-y-2">
              <div className="relative">
                <Input className=" bg-gray-700 text-white rounded-medium" endContent={<Button isIconOnly size='sm' variant='light'>
                  <Icon className="h-4 w-4" icon="mdi:send" />
                </Button>
                }
                  placeholder="Enter your email"
                  type="email"
                  variant='bordered'
                />

              </div>
            </form>
            <div className="mt-4">
              <p className="text-gray-400 text-sm mb-2">Download Our App</p>
              <div className="flex space-x-2">
                {['mdi:google-play', 'mdi:apple'].map((icon: string) => (
                  <Button key={icon} isIconOnly className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors" href="/">
                    <Icon className="h-6 w-6 text-white" icon={icon} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

