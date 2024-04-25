"use client"
import * as React from "react";
// import Image from "next/image";
import { Text } from "@/components/elements/Text";
import Rating from "../Rating/Rating";
import { CartButton } from "@/components/elements";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
// import Headphone from "@/assets/cart.svg";

export type ProductCardProps = {
  className?: string;
  children?: React.ReactNode;
  img?: string;
  imgAlt?: string
  link: Url;
  name: string;
  price: number | string;
  description: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ className, children, img, imgAlt, link, name, price, description }) => {
  return (
    <div className={`rounded-t-lg ${className} w-fit my-4`}>
      <Link href={link}>
        {img ? <img src={img} alt={imgAlt} className="w-64 h-64" /> : children}
      </Link>


      <div className="mt-6 font-Inter">
        <div className="md:flex justify-between text-lg font-medium leading-5 mb-3">
          <Text level={"h3"} className="">
          {name}
          </Text>
          <Text level={"h4"} className="flex font-Inter">
            <span className="font-normal text-xs">$</span>
            <span className="font-bold">{price}</span>
            <span className="font-normal text-xs">.00</span>
          </Text>
        </div>
        <Text className="font-normal font-Inter text-xs leading-tight">
          {description}
        </Text>
        <div className="flex -ml-[3px] mb-3">
          <Rating score={3.5} />
          <Text className="ml-2 text-xs text-gray-500">(124)</Text>
        </div>
        <CartButton
          icon={true}
          label={"Add to Cart"}
          className="rounded-full flex px-3 py-1 border-2 border-gray-400 font-medium bg-white text-xs font-Inter items-center"
        />
      </div>
    </div>
  );
};
