import BrandSection from "@/components/BrandSection";
import { CategoryCarousel } from "@/components/category-carousel";
import { brands, newProducts, popularProducts, recommendedProducts } from "@/components/data";
import { Features } from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import MobSidebar from "@/components/MobSidebar";
import { NewsTeller } from "@/components/NewsTeller";
import ProductSection from "@/components/ProductSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen  bg-white relative">
    <CategoryCarousel/>
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

            <div className="w-full space-y-4  ">
              <ProductSection
                products={newProducts}
                subtitle="Check out our latest products"
                title="New Arrivals"
              />

              <ProductSection
                products={popularProducts}
                subtitle="Most loved by our customers"
                title="Popular Products"
              />

              <ProductSection
                products={recommendedProducts}
                subtitle="Based on your preferences"
                title="Recommended For You"
              />
            </div>
          </div>
        </div>

        <BrandSection brands={brands} />

        <Features />

        <NewsTeller />
        <MobSidebar />
      </main>

    </div>
  );
}
