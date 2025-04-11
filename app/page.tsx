
import { newProducts, popularProducts, recommendedProducts } from "@/components/data";
import HeroSection from "@/components/HeroSection";
import MobSidebar from "@/components/MobSidebar";
import ProductSection from "@/components/ProductSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen mb-12 bg-white relative">
      <HeroSection />
      {/* Main Content */}
      <main className="flex-grow ">
        <div className="container px-4 py-8 mx-auto">

          {/* Main content with sidebar and products */}

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar with filters - hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block">
              <div className="sticky top-4">
                <Sidebar />
              </div>
            </div>

            {/* Product sections */}
            <div className="w-full space-y-8  ">
              {/* New Products Section */}
              <ProductSection
                products={newProducts}
                subtitle="Check out our latest products"
                title="New Arrivals"
                viewAllLink="/new-arrivals"
              />

              {/* Recommended Products Section */}
              <ProductSection
                products={recommendedProducts}
                subtitle="Based on your preferences"
                title="Recommended For You"
                viewAllLink="/recommended"
              />

              {/* Popular Products Section */}
              <ProductSection
                products={popularProducts}
                subtitle="Most loved by our customers"
                title="Popular Products"
                viewAllLink="/popular"
              />
            </div>
          </div>
        </div>

        {/* Brands Section */}
        {/* <BrandSection brands={brands} /> */}

        {/* Features Section */}
        {/* <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-10 text-2xl font-bold text-center">Why Shop With Us</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              /* Feature 1 
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Free Shipping</h3>
                <p className="text-gray-600">Free shipping on all orders over $50</p>
              </div>
              
              // Feature 2 
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">24/7 Support</h3>
                <p className="text-gray-600">Round the clock customer support</p>
              </div>
              
              // Feature 3 
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment methods</p>
              </div>
              
              // Feature 4 
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Easy Returns</h3>
                <p className="text-gray-600">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Newsletter Section */}
        {/* <section className="py-12 text-white bg-primary">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-2 text-2xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-6">Stay updated with our latest products, exclusive offers, and promotions.</p>
            <div className="flex flex-col max-w-md gap-2 mx-auto sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 text-gray-900 rounded-md focus:outline-none"
              />
              <button className="px-6 py-3 font-medium text-white transition-colors rounded-md bg-dark hover:bg-dark/90">
                Subscribe
              </button>
            </div>
          </div>
        </section> */}
        <MobSidebar />
      </main>

    </div>
  );
}
