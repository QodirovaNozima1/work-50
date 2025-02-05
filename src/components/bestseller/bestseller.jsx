import React, { useEffect, useState } from "react";
import "./Bestseller.css";
import axios from "../../api/Index";
import { FaCircle } from "react-icons/fa";
import { LiaSpinnerSolid } from "react-icons/lia";

const Bestseller = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("/products", {
                params: {
                    limit: 8,
                },
            })
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => console.error("API Error:", err));
    }, []);

    return (
        <section className="py-10">
            <div className="container mx-auto text-center">
                <h3 className="mb-2.5 text-[#737373] text-start mt-8 text-2xl font-bold">
                    BESTSELLER PRODUCTS
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24 text-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="rounded-lg flex flex-col items-center hover:shadow-xl duration-4 pt-4">
                            <div className="w-[239px] aspect-square overflow-hidden rounded-lg pl-7">
                                <img
                                    className="h-full object-contain"
                                    src={product.image}
                                    alt=""
                                />
                            </div>
                            <div className="p-4 text-center flex flex-col items-center">
                                <h2
                                    title={product.title}
                                    className="text-[#252B42] text-[16px] font-bold mb-2 desck"
                                >
                                    {product.title}
                                </h2>
                                <p className="text-[#737373] text-[14px] font-bold mb-2">
                                    English Department
                                </p>
                                <div className="flex gap-2">
                                    <p className="text-[#BDBDBD] font-bold">${product.rating}</p>
                                    <strong className="block text-[#23856D] text-[16px] font-bold mb-3">
                                        ${product.price}
                                    </strong>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-[#23A6F0]">
                                        <FaCircle />
                                    </p>
                                    <p className="text-[#23856D]">
                                        <FaCircle />
                                    </p>
                                    <p className="text-[#E77C40]">
                                        <FaCircle />
                                    </p>
                                    <p className="text-[#252B42]">
                                        <FaCircle />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center m-auto text-[#737373] text-3xl"><LiaSpinnerSolid /></p>
                )}
            </div>
        </section>
    );
};

export default Bestseller