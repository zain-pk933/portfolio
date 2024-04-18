import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay"
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <section className="grid grid-cols-[1fr,12fr,1fr]">
      <div className="bg-zinc-400 justify-center items-center flex">
<div className="h-4/6 bg-black w-1"></div>



 

      </div>
      <div className="bg-neutral-500 ">
      <Carousel className="bg-gray-300 w-full justify-center flex items-center">
          <CarouselContent className="w-full">
            <CarouselItem className="w-full">
              <div className="bg-slate-500 w-full pr-0 pl-0 ">
                <h1>01</h1>
              </div>

              <div>
                <p>Trendy minimalist design only for you.</p>
              </div>
              <img src="person.png" alt="person" height={592} width={450}></img>
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
