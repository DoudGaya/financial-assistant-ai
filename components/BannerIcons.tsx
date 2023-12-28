import Image from 'next/image'
import React from 'react'

export const BannerIcons = ({ icon }: { icon: string }) => {
  return (
    <div className="p-6 bg-gradient-to-b to-white/40 dark:to-black/40 dark:from-purple-400 from-purple-600/40 rounded-xl">
      <Image
        className=" h-full"
        height={800}
        width={800}
        src={icon}
        alt=""
      />
    </div>
  );
};
