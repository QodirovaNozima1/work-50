import React, { useState, useEffect } from 'react'
import "./Product.css";
import { FaCircle } from "react-icons/fa";
import { LiaSpinnerSolid } from "react-icons/lia";
import axios from 'axios'
import { Link } from 'react-router-dom';
const API_URL = "https://dummyjson.com"
const Product = () => {
  
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [onset, setOnset] = useState(1)
    const [oneItem, setOneItem] = useState(null)
    const limit = 8

    useEffect(()=>{
        axios
        .get(`${API_URL}/products/category-list`)
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    },[])
    console.log(categories);
    console.log(selectCategory);
    
    

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${API_URL}/products${selectCategory}`,{
                params:{
                    limit: limit * onset
                }
            })
            .then(res => {
                console.log(res.data);
                setTotal(res.data.total);
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [onset, selectCategory])

    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com');
      const data = await response.json();
      return data;
  };

    useEffect(() => {
      fetchProducts().then(data => {
          setProducts(data);
      });
  }, []);

    const productItem = products?.map((product) => (
        <div key={product.id} className="rounded-lg flex flex-col items-center hover:shadow-xl duration-4 pt-4">
          <div className="w-[239px] aspect-square overflow-hidden rounded-lg">
          <Link to = {`/product/${product.id}`}>
            <img
              className="h-full object-contain"
              src={product.images}
              alt=""
            />
            </Link>
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
            <p className="text-[#BDBDBD] font-bold">${product.rating.rate}</p>
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

 
    const categoryItems = categories?.map(item =>(
      <option key={item} value={`/category/${item}`}>{item}</option>
  ))

    
    return (

      <section className="py-10 mb-11">
      <div className="container mx-auto">
        <div className="mb-12 text-[#737373] text-center">
          <h2 className="mb-2.5 text-[20px] font-normal">Featured Products</h2>
          <h3 className="mb-2.5 text-[24px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[14px] font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>
        </div>


      <div className='container w-5/7 mb-16'>
            <div className="mt-4">
            <select value={selectCategory} onChange={e => setSelectCategory(e.target.value)} name="" id="" className='overflow-none' >
             <option value="" >All</option>
             {categoryItems}
             </select>
            </div>
            <div className="flex item-center justify-center">
            {loading && <h2 className='text-7xl items-center justify-center'><LiaSpinnerSolid /></h2>}
            </div>
            <div className='flex gap-3 flex-wrap items-center justify-center'>
                { productItem}
            </div>

            {
                limit * onset <= total &&
                <button onClick={() => setOnset(p => p + 1)} className='py-2 px-6 border rounded-md block mx-auto mt-5 bg-[#2DC071] text-slate-100 text green'>See more</button>
            }
        </div>
    </section>
    )
  }
export default Product