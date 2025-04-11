import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export function NewsTeller() {
    return (
        <div>
            {/* Newsletter Section */}
            <section className="py-12 text-white bg-primary">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="mb-2 text-2xl font-bold">Subscribe to Our Newsletter</h2>
                    <p className="max-w-2xl mx-auto mb-6">
                        Stay updated with our latest products, exclusive offers, and promotions.
                    </p>
                    <div className="flex flex-col max-w-md gap-2 mx-auto sm:flex-row">
                        <Input
                            className="flex-grow"
                            placeholder="Enter your email address"
                            radius="sm"
                            type="email"
                        />
                        <Button color="success"
                            radius="md"
                            size="md"
                            variant="solid"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}