import React, { memo, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const API_URL = "https://dummyjson.com";
import { IoStarOutline } from "react-icons/io5";
import axios from "../../api/Index";
import { FaCircle } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
import Description from "../../components/description/Description";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [products, setproducts] = useState([]);

  const [total, settottal] = useState(0);
  const [offsetsy, setoffsetsy] = useState(1);
  const [sellect, setSellect] = useState("");
  console.log(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((res) => console.log(res));
  }, [id]);
  useEffect(() => {
    axios
      .get(`/products/category/${data?.category}`, { params: { limit: 4 } })
      .then((res) => setproducts(res.data.products))
      .catch((err) => console.log(err));
  }, [offsetsy, sellect, data]);

  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className="w-72 p-3 api flex flex-col gap-4 items-center justify-center rounded-lg  relative overflow-hidden"
    >
      <img
        src={product.images}
        alt=""
        className="w-full h-52 object-contain hover:scale-105 "
      />
      <div className="flex flex-col gap-2 ">
        <h3 className="text-center text-xl font-semibold">{product.brand}</h3>
        <p className="text-red-500 text-sm font-medium ml-2">12%</p>
        <p className="text-lg font-semibold ml-2 mb-6">${product.price}</p>
        <p>Availability :</p>
        <h2 className="text-[#23A6F0]">In Stock </h2>
        <p className="desck">{product.description}</p>
      </div>

    </div>
  ));
  return (
    <>
    <div className="bg-[#FAFAFA] pb-14 pt-8">
      <div className="container w-10/12 pt-14 pb-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1 ">
        <div className="mt-12 gap-16">
          {" "}
          <img
            className="w-[300px] m-auto mb-4 object-contain"
            src={data?.images}
            alt=""
          />
          <div className="flex  gap-7">
            {data?.images?.map((item, inx) => (
              <img
                className="w-[80px] h-[80px] object-contain border-1"
                src={item}
                key={inx}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[42px] font-[600]">{data?.brand}</h2>
          <div className="flex gap-[50px] items-center justify-start">
            <div className="flex gap-1 text-amber-300">
              <IoStarOutline />
              <IoStarOutline />
              <IoStarOutline />
              <IoStarOutline />
              <IoStarHalf />
            </div>
            <p className="text-[18px] font-bold">{data?.price}</p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold ml-2 mb-6">${data?.price}</p>
            <div className="flex font-bold">
              <p>Availability :</p>
              <h2 className="text-[#23A6F0]">In Stock </h2>
            </div>
          </div>
          <p>{data?.description}</p>
          <hr />
          <div className="flex gap-2 text-3xl">
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
        <div className="flex gap-3 text-center">
          <button className="w-[148px] h-[44px] bg-[#23A6F0] text-white rounded-lg">Select options</button>
          <button className="w-[40px] h-[40px] rounded-full bg-white text-2xl flex items-center justify-center"><CiHeart /></button>
          <button className="w-[40px] h-[40px] rounded-full bg-white text-2xl flex items-center justify-center"><CiShoppingCart /></button>
          <button className="w-[40px] h-[40px] rounded-full bg-white text-2xl flex items-center justify-center"><IoEyeSharp /></button>
        </div>
        </div>
      </div>
    </div>
    </div>
    <Description/>
    </>
    
  );
};

export default memo(Detail);
