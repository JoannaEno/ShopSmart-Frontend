"use client"

import { ProductCard, ProductDetailsCard } from '@/components/compositions'
import { ReactComponent as HeadPhone } from "@/assets/headphone.svg";
import { Text } from "@/components/elements"
import React from 'react'
import { listItems } from '@/utils';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'

const ProductDetails = () => {
    // const router = useRouter();

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [data, setData] = useState([]);
    const [dataDetail, setDataDetail] = useState<any>();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // if (router) {
        //     const { id } = router.query;
        //     console.log('Product ID:', id);

        //     fetchDataDetail(searchParams);
        //   }
        fetchDataDetail(pathname);

        fetchData();
      
      }, []);

      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/apis/products');
          const jsonData = await response.json();
          setData(jsonData.products);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      const fetchDataDetail = async (id: any) => {
        try {
            
          const response = await fetch(`http://localhost:8000/apis/products/${id}`);
          const jsonData = await response.json();
          setDataDetail(jsonData);
          setLoading(false);
            
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

    return (
        <div className='flex flex-col w-full px-4 lg:px-8'>

            <ProductDetailsCard description={"dataDetail.description"} />

            <div className=" min-w-full lg:px-8 px-4 py-6 lg:py-12 ">
                <div className="pb-4 lg:pb-8"><Text level="h2" className="text-black font-medium text-3xl">Similar Items You Might Like</Text></div>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 min-w-full justify-items-center">
                    {data && data?.map((item: any, index) => (<ProductCard link={`/product/${index + 1}`} key={index} className="text-[#101928] "  name={item.name} price={item.price} description={item.description}>
                        {/* change the product images to normal images so they can accept url */}
                        <HeadPhone className="" />
                    </ProductCard>))}

                </div>
            </div>
        </div>
    )
}

export default ProductDetails