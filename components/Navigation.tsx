import React from 'react'
import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className=" mx-auto max-w-5xl py-6  ">
      <div className=" flex bg-green-400/50 py-2 px-6 justify-between">
        <div className=" flex space-x-6">
          <Link href={"#"}>LOGO</Link>
          <div className=" space-x-6">
            <Link href={"#"}>HOME</Link>
            <Link href={"#"}>ABOUT</Link>
          </div>
        </div>
        <div className="">
          <div className="">
            <Link href={"#"}>
              <span className=' py-4'>Sign In</span>
            </Link>
            <Link href={"#"}>
              <span className=" py-3 rounded-full "> Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
