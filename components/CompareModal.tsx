'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import { newProducts, recommendedProducts, popularProducts } from "./data";

export default function CompareModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [product1, setProduct1] = useState(newProducts[0]);
    const [product2, setProduct2] = useState(newProducts[1]);

    const allProducts = [...newProducts, ...recommendedProducts, ...popularProducts];

    return (
        <>
            <Button className="shadow" isIconOnly={true} radius="full" size="lg" variant="light" onPress={() => setIsOpen(!isOpen)}>
                <Icon className="text-default-600 hover:text-foreground-800" height={30} icon="lucide:git-compare" width={30} />
            </Button>
            <Modal isOpen={isOpen} size="5xl" onOpenChange={setIsOpen}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-bold">
                                Compare Products
                            </ModalHeader>
                            <ModalBody>
                                <div className="mb-4 flex justify-between">
                                    <select
                                        className="p-2 border border-gray-300 rounded"
                                        value={product1.id}
                                        onChange={(e) =>
                                            setProduct1(allProducts.find((p) => p.id === e.target.value) || product1)
                                        }
                                    >
                                        {allProducts.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className="p-2 border border-gray-300 rounded"
                                        value={product2.id}
                                        onChange={(e) =>
                                            setProduct2(allProducts.find((p) => p.id === e.target.value) || product2)
                                        }
                                    >
                                        {allProducts.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="p-4 text-left border border-gray-200">Feature</th>
                                                <th className="p-4 text-center border border-gray-200">{product1.name}</th>
                                                <th className="p-4 text-center border border-gray-200">{product2.name}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-4 border border-gray-200">Image</td>
                                                <td className="p-4 text-center border border-gray-200">
                                                    <Image alt={product1.name} className="w-24 h-24 object-cover mx-auto" height={96} src={product1.image} width={96} />
                                                </td>
                                                <td className="p-4 text-center border border-gray-200">
                                                    <Image alt={product2.name} className="w-24 h-24 object-cover mx-auto" height={96} src={product2.image} width={96} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-gray-200">Price</td>
                                                <td className="p-4 text-center border border-gray-200">${product1.price}</td>
                                                <td className="p-4 text-center border border-gray-200">${product2.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-gray-200">Rating</td>
                                                <td className="p-4 text-center border border-gray-200">{product1.rating}</td>
                                                <td className="p-4 text-center border border-gray-200">{product2.rating}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-gray-200">Brand</td>
                                                <td className="p-4 text-center border border-gray-200">{product1.brand}</td>
                                                <td className="p-4 text-center border border-gray-200">{product2.brand}</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </ModalBody>
                            <ModalFooter className="flex justify-end">
                                <Button className="bg-red-500 text-white hover:bg-red-600" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
