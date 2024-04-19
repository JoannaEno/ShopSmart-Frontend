import * as React from "react";
import { Button, Text } from "@/components/elements";
import { ReactComponent as Rectangle } from "@/assets/Rectangle.svg";
import { ReactComponent as RectangleOne } from "@/assets/Rectangle-view-one.svg";
import { ReactComponent as RectangleTwo } from "@/assets/Rectangle-view-two.svg";
import { ReactComponent as RectangleThree } from "@/assets/Rectangle-view-three.svg";
import { ReactComponent as RectangleFour } from "@/assets/Rectangle-view-four.svg";
import { ReactComponent as Icon } from "@/assets/icon.svg";
import Rating from "../Rating/Rating";
import { FaMinus, FaPlus } from "react-icons/fa6";

export type ShopNowCardProps = {
  description: string;
  className?: string;
  title?: string;
  subTitle?: string;
  price?: string;
  specialPrice?: string;
  color?: string;
  size?: string;
  items?: number;
};

export const ProductDetailsCard: React.FC<ShopNowCardProps> = ({
  className,
  description,
  title,
  subTitle,
  price,
  specialPrice
}) => {
  return (
    <div
      className={`bg-[#DEF2FF] text-gray-500 max-w-[70%] md:flex  ${className}`}
    >
      <div className="space-y-4">
        <Rectangle className="" />
        <div className="flex space-x-4">
          <RectangleOne className="" />
          <RectangleTwo className="" />
          <RectangleThree className="" />
          <RectangleFour className="" />
        </div>
      </div>
      <div className="pl-8 font-Inter">
        <Text
          level="h3"
          className="text-[#101928] justify-between text-lg font-medium leading-5 mb-3"
        >
          {}
        </Text>
        <Text className="mt-3 font-normal font-Inter text-xs leading-tight">
          Lorem ipsum dolor sit amet consectetur. Sed cras commodo ante nunc
          proin mi in lacus adipiscing. Ullamcorper pretium in dui vitae
          adipiscing hendrerit a facilisis.
        </Text>
        <div className="flex mt-2 mb-2">
          <Rating score={5} />
          <Text className="ml-2 text-xs text-gray-500 pt-[2px]">(124)</Text>
        </div>
        <Text level="h4" className="text-[#101928] font-medium">
          $ 190.20 or $129.99/month
        </Text>
        <Text className=" font-normal font-Inter text-xs leading-tight">
          Suggested payments with 6 months special financing
        </Text>
        <div className="space-y-2 mt-4 pt-4 border-gray-300 border-t-2">
          <Text className="text-sm text-[#101928]">Choose a Color</Text>
          <div className="flex space-x-3">
            <div className="rounded-full p-4 border-[#101928] border-2"></div>
            <div className="rounded-full p-4 bg-[#B00074] border-2"></div>
            <div className="rounded-full p-4 bg-[#475367] border-2"></div>
            <div className="rounded-full p-4 bg-[#FBE2B7] border-2"></div>
            <div className="rounded-full p-4 bg-[#FBE2B7] border-2"></div>
          </div>
        </div>
        <div className="space-y-2 mt-4 pt-4 border-gray-300 border-t-2 text-sm border-b-2 pb-4">
          <div className="flex justify-between ">
            <Text className="text-[#101928]">Select Size</Text>
            <Text>Size Guide</Text>
          </div>
          <div className="flex justify-between">
            <div className="rounded-3xl p-4 border-[#101928] border-2">37</div>
            <div className="rounded-full p-4 bg-[#F0F2F5] border-2">38</div>
            <div className="rounded-full p-4 bg-[#F0F2F5] border-2">39</div>
            <div className="rounded-full p-4 bg-[#F0F2F5] border-2">40</div>
            <div className="rounded-full p-4 bg-[#F0F2F5] border-2">41</div>
            <div className="rounded-full p-4 bg-[#F0F2F5] border-2">42</div>
            <div className="rounded-full p-4 bg-[#F0F2F5] border-2">43</div>
          </div>
        </div>
        <Text className="text-[#101928] mt-4">Quantity</Text>
        <div className="flex items-center space-x-4">
          <div className="bg-[#F0F2F5] space-x-12 flex items-center justify-between mt-3 rounded-full border border-gray-500 p-4">
            <Text>
              <FaMinus />
            </Text>
            <Text className="text-lg font-bold text-black">1</Text>
            <Text>
              <FaPlus />
            </Text>
          </div>
          <Text className="text-gray-500 pt-2 md:max-w-[150px]">
            Only <span className="text-[#101928]">12 Items</span> Left! Don’t
            miss it
          </Text>
        </div>
        <div className="flex space-x-4 mt-6">
          <Button
            className="bg-[#0174BE] text-white px-9 py-5 rounded-full text-lg font-bold"
            href=""
            label="Add to Cart"
            type="submit"
          />
          <Button
            className="text-black border-2 border-gray-500 px-8 py-4 rounded-full text-lg font-bold"
            href=""
            label="Add to Cart"
            type="submit"
          />
        </div>
        <div className="flex space-x-4 mt-6 border-2 border-gray-300 p-3 rounded-lg shadow-sm">
          <Icon />
          <div>
            <Text className="text-gray-900 font-bold" level={"h3"}>
              Free Delivery
            </Text>
            <Text className="text-lg text-gray-500">
              Enter your Postal Code for Delivery Availability
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
