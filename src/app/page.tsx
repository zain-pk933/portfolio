import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay"
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import "./globals.css";
import ButtonAnimation from "@/components/ui/animation";

export default function Home() {
  return (
    <section className="grid grid-cols-[1fr,12fr,1fr] ">
      <div className="bg-zinc-400 justify-center items-center flex">
        <div className="h-4/6 bg-black w-1"></div>
      </div>
      <div className="bg-neutral-500 ">
        <Carousel className="bg-gray-300 w-full justify-center flex items-center ">
          <CarouselContent className="w-[80vw] pt-10">
            <CarouselItem className="w-full  justify-center flex flex-col items-center">
              <div className=" w-full pr-0 pl-0 ">
                {/* <h1 style={{fontSize:180 }} className="m pl-20ontserrat text-right">01</h1>  */}
              </div>

              <div>
                <p>Trendy minimalist design only for you.</p>
              </div>
              <div className="h-20 w-max pr-0 z-10 ml-[400px]">
                <h1 style={{fontSize:180 }} className="montserrat text-center">01</h1>
              </div>
              <div className="overlay bg-contain bg-no-repeat w-fit" style={{ backgroundImage: "url('bg-person.png')" }} >
              {/* <img src='bg-person.png' alt='bg-person' width={500}></img> */}
              <img src="person.png" alt="person" height={592} width={450}></img>
              </div>
            </CarouselItem>
            <CarouselItem>2</CarouselItem>
            <CarouselItem>3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="bg-amber-100 flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className={`animated animate-slideInDown`}>
            <Button variant="outline" size="icon" className="rounded-full">
              <img src="facebook.png" className=""></img>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <img src="instagram.png"></img>
            </Button>
          </div>
          <ButtonAnimation/>
          <Button variant="outline" size="icon" className="rounded-full">
            <img src="facebook.png" className=""></img>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <img src="instagram.png"></img>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <img src="twitter.png"></img>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <img src="whatsapp.png"></img>
          </Button>
        </div>
      </div>

      <div className=" bg-[#efefef] justify-center flex items-end min-w-full h-screen pr-14 pl-14">
        <div className="grid grid-col-2 bg-zinc-50">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
