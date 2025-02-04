import React, { useState, useEffect } from 'react'
import "./Product.css";
import { LiaCartPlusSolid } from "react-icons/lia";
import { LiaSpinnerSolid } from "react-icons/lia";
import axios from 'axios'
import { Link } from 'react-router-dom';
const API_URL = "https://dummyjson.com"
const Product = () => {
  
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [onset, setOnset] = useState(1)
    const [oneItem, setOneItem] = useState(null)
    const limit = 6

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
    
    return (
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
                <button onClick={() => setOnset(p => p + 1)} className='py-2 px-6 border rounded-md block mx-auto mt-5 bg-emerald-300 text-slate-100 text green'>See more</button>
            }
        </div>

    )
}

export default Product