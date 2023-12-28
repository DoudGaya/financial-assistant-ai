import { Navigation } from '@/components/Navigation'
import Image from 'next/image'
import calculator from '@/app/img/Calculator.png'
import bg from '@/app/img/home-banner-bg.png'
import cards from '@/app/img/cards.png'

import { BannerIcons } from '@/components/BannerIcons'
// icons 
import icon1 from "@/app/img/book-2-svgrepo-com.svg";
import icon2 from "@/app/img/money-bag-svgrepo-com.svg";
import icon3 from "@/app/img/money-send-svgrepo-com.svg";
import icon4 from "@/app/img/money-send-svgrepo-com (1).svg";

const icons = [icon1, icon2, icon3, icon4]


export default function Home() {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className="h-[90vh] bg-banner-img  w-full bg-cover bg-no-repeat">
        <div className=" border-b">
          <Navigation />
        </div>
        <div className="  max-w-6xl h-full grid grid-cols-2 mx-auto">
          <div className=" flex pt-[10rem] flex-col space-y-6">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-6xl font-black">
              Take Control Over <br /> Your Income
            </h1>
            <p className=" text-2xl">
              With our free AI powered financial assistant
            </p>
            <div className=" overflow-hidden">
              <Image
                src={calculator}
                className=" h-[300px] object-center object-contain"
                height={700}
                width={700}
                alt=""
              />
            </div>
          </div>
          <div className=" pt-[5rem] flex flex-col">
            <div className=" overflow-hidden">
              <Image
                className=" h-[400px] object-contain"
                src={cards}
                height={800}
                width={800}
                alt="Credit Cards"
              />
              <div className=" w-full flex flex-col items-center px-10 h-full ">
                <div className="grid w-full gap-6 grid-cols-4">
                  {icons.map((icon) => {
                    return (
                      <BannerIcons
                        key={icon}
                        icon={icon}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
