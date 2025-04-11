'use client';
import { Button } from "@heroui/button";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,

} from "@heroui/drawer";
import { Icon } from "@iconify/react";
import { useState } from "react";

import Sidebar from "./Sidebar";

export default function MobSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                aria-label="Open sidebar"
                className="fixed bottom-4 right-4 z-50 shadow-lg bg-primary text-white hover:bg-primary/90 focus:ring-4 focus:ring-primary/50 lg:hidden"
                radius="full"
                size="lg"
                variant="solid"
                onPress={() => setIsOpen(true)}
            > Open Sidebar
                <Icon height={24} icon="mdi:filter-variant" width={24} />
            </Button>
            <Drawer isOpen={isOpen} placement="left" size="sm" onOpenChange={setIsOpen}>
                <DrawerContent>
                  
                            <DrawerHeader className="flex flex-col gap-1 p-4" />
                            <DrawerBody>
                                <Sidebar ismob={true} />
                            </DrawerBody>
                          
                      
                </DrawerContent>
            </Drawer>
        </div>
    );
}
