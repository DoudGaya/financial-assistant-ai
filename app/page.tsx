import { Navigation } from '@/components/Navigation'
import Image from 'next/image'
import bg from '@/app/img/home-banner-bg.png'
export default function Home() {
  return (
    <div className="">
      <div className=" h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg.src})` }}>
         <Navigation />
      </div>
   </div>
  )
}
