import { ProductDetailsCard, TextCard, ProductCard, Hero } from "@/components/compositions";
import { Button, Text } from "@/components/elements"
// import { ProductCard } from "@/components/compositions/ProductCard/ProductCard";
import { ReactComponent as Cart } from "@/assets/cart.svg";
import { ReactComponent as Satisfaction } from "@/assets/satisfactionGuarantee.svg";
import { ReactComponent as NewArrival } from "@/assets/newArrival.svg";
import { ReactComponent as FastShipping } from "@/assets/fastShipping.svg";
import { ReactComponent as HeadPhone } from "@/assets/headphone.svg";
import { listItems } from "@/utils";
import Image from "next/image";
import headphonePromo from '../assets/headphonePromo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-24 ">
      <div className="flex px-4 w-full lg:px-8">
        <Hero />
      </div>

      <div className="flex lg:px-8 px-4">
        <TextCard
          description="We ensure money-back guarantee if the product is counterfeit"
          title="Original Products"
          className="text-[#101928]  p-8 space-y-4"
        >
          <Cart className="" />
        </TextCard>
        <TextCard
          description="We ensure money-back guarantee if the product is counterfeit"
          title="Satisfaction Guarantee"
          className="text-[#101928] p-8 space-y-4"
        >
          <Satisfaction className="" />
        </TextCard>
        <TextCard
          description="We ensure money-back guarantee if the product is counterfeit"
          title="New Arrival Everyday"
          className="text-[#101928] p-8 space-y-4"
        >
          <NewArrival className="" />
        </TextCard>
        <TextCard
          description="We ensure money-back guarantee if the product is counterfeit"
          title="Fast & Free Shipping"
          className="text-[#101928] p-8 space-y-4"
        >
          <FastShipping className="" />
        </TextCard>
      </div>
      <div className="bg-app_light_bg min-w-full lg:px-16 px-8 py-6 lg:py-12 ">
        <div className="pb-4 lg:pb-8"><Text level="h2" className="text-black font-medium text-3xl">Popular</Text></div>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 min-w-full">
          {listItems(8).map((_, index) => (<ProductCard key={index} className="text-[#101928] ">
            {/* change the product images to normal images so they can accept url */}
            <HeadPhone className="" />
          </ProductCard>))}

        </div>
        <div className="flex justify-center"> <Button icon label="View All Products" className="bg-blue text-white p-2 rounded-md text-lg mt-8 font-medium" /></div>

      </div>

      <div className="px-8 lg:px-16 w-full pb-8 lg:pb-16">
        <div className="flex bg-gradient-to-r from-yellow to-yellow/70 w-full justify-between">
          <div className="flex flex-col items-start w-[60%] justify-center px-8 lg:px-16">
            <Text level="h2" className='text-3xl'>Classy and sleek product all over<br />the world brought to your footstep!</Text>
            <Button icon label="Shop Now" className="bg-blue text-white p-4 rounded-md text-lg font-medium mt-8" />
          </div>
          <div className="relative w-[30rem] h-[30rem]">
            <Image src={headphonePromo} alt="promo headphone" className="absolute -right-5 -bottom-20 w-[40rem] h-[40rem] object-contain" />

          </div>
        </div>
      </div>
    </main>
  );
}
