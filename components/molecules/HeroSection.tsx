import React from 'react';
import portrait from '../../public/me.jpeg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div>
      <div className="mx-auto overflow-hidden rounded-full w-28 h-28">
        <Image src={portrait} alt="image steven elias - steevened" />
      </div>
      <div className="mt-2.5 text-center">
        <h2 className="leading-tight title-1 text-gradient">
          Changing The <br /> Game
        </h2>
        <p className="mt-5 text-lg font-semibold text-gradient">
          Revolutionizing dev experience
        </p>
      </div>
    </div>
  );
}
