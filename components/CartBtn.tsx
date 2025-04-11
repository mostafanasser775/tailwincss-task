import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function CartBtn() {
    return (
        <Dropdown>
            <DropdownTrigger>
                    <Button className="shadow" isIconOnly={true} radius="full" size="lg" variant="light">
                        <Icon className="text-default-600 hover:text-foreground-800" height={30} icon="lucide:shopping-cart" width={30} />
                    </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Wishlist" className="w-72" disabledKeys={['total', "divider", "divider2", "wishlist"]}>
                <DropdownItem key="wishlist" isReadOnly>My Wishlist (3)</DropdownItem>
                <DropdownItem key="divider2" showDivider className="mb-2" />

                <DropdownItem key="product-1" className="mt-2">
                    <div className="flex items-center gap-3">
                        {/* Using Image component from next/image */}
                        <Image alt="Stylish Headphones" className="w-10 h-10 rounded" height={40} src="https://i.imgur.com/YaSqa06.jpeg" width={40} />
                        <span>Stylish Headphones</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="product-2">
                    <div className="flex items-center gap-3">
                        <Image alt="Mirror Finish Phone Case" className="w-10 h-10 rounded" height={40} src="https://i.imgur.com/yb9UQKL.jpeg" width={40} />
                        <span>Mirror Finish Phone Case</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="product-3">
                    <div className="flex items-center gap-3">
                        <Image alt="Denim Espadrille Sandals" className="w-10 h-10 rounded" height={40} src="https://i.imgur.com/9qrmE1b.jpeg" width={40} />
                        <span>Denim Espadrille Sandals</span>
                    </div>
                </DropdownItem>

                <DropdownItem key="divider" showDivider />
                <DropdownItem key="total" isReadOnly className="flex justify-between cursor-default">
                    <div className="flex justify-between">
                        <p>Total:</p>
                        <strong>$59.99</strong>
                    </div>
                </DropdownItem>
                <DropdownItem key={"key1"} className="p-0 mt-2">
                    <>
                        <Button className="w-full" color="secondary" variant="solid">Buy Now</Button>
                    </>
                </DropdownItem>
                <DropdownItem key='key2 "' className="p-0 mt-2">
                    <Button className="w-full" color="secondary" variant="light">Checkout</Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
