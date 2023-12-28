import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './DarkButton';

export const Navigation = () => {
  return (
    <div className="mx-auto max-w-7xl space-x-3 flex w-full py-2  ">
      <div className=" flex w-full items-center px-6 justify-between">
        <div className=" flex space-x-6">
          <div className=" space-x-6">
            <Link
              href={"#"}
              className=" font-semibold ">
              Home
            </Link>
            <Link
              href={"#"}
              className=" font-semibold ">
              About
            </Link>
          </div>
        </div>
        <div className=" flex items-center space-x-6">
          <div className=" flex items-center space-x-4">
            <Link href={"#"}>
              <span className=" py-2 font-semibold">Sign In</span>
            </Link>
            <Link href={"#"}>
              <p className=" py-2 px-4 bg-[#2B004D] text-white rounded-lg ">
                {" "}
                Get Started
              </p>
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
