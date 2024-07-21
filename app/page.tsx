import Image from 'next/image';

import Hero from './hero';
import Marquee from './marquee';
import Tokenomics from './tokeomics';

import slide1 from '@/public/slide-1.png';
import slide2 from '@/public/slide-2.png';
import slide3 from '@/public/slide-3.png';
import slide4 from '@/public/slide-4.png';
import slide5 from '@/public/slide-5.png';
import slide6 from '@/public/slide-6.png';
import slide7 from '@/public/slide-7.png';
import slide8 from '@/public/slide-8.png';
import slide9 from '@/public/slide-9.png';
import slide10 from '@/public/slide-10.png';

import paperImg from './paper.svg';
import clsx from 'clsx';

export default function Home() {
  return (
    <main className='mx-auto max-w-screen-2xl overflow-hidden'>
      <Hero />
      <div className='custom-gradient pb-10'>
        <div
          className={clsx(
            'space-y-5 sm:space-y-8 lg:space-y-10',
            '*:multi-[-ml-10;w-[calc(100%+5rem)];rotate-[2.5deg]]',
            'lg:*:rotate-[3.4deg]'
          )}
        >
          <div>
            <Marquee direction='left'>
              <Image src={slide1} placeholder='blur' alt='' />
              <Image src={slide2} placeholder='blur' alt='' />
              <Image src={slide3} placeholder='blur' alt='' />
              <Image src={slide4} placeholder='blur' alt='' />
              <Image src={slide5} placeholder='blur' alt='' />
            </Marquee>
          </div>
          <div>
            <Marquee direction='right'>
              <Image src={slide6} placeholder='blur' alt='' />
              <Image src={slide7} placeholder='blur' alt='' />
              <Image src={slide8} placeholder='blur' alt='' />
              <Image src={slide9} placeholder='blur' alt='' />
              <Image src={slide10} placeholder='blur' alt='' />
            </Marquee>
          </div>
        </div>

        <div className='mt-10 flex justify-center lg:mt-20'>
          <Image
            src={paperImg}
            alt=''
            className='min-w-[850px] object-cover object-right'
          />
        </div>

        <div className='mt-10 px-5 lg:px-10 2xl:px-12'>
          <Tokenomics />
        </div>

        <div
          className={clsx(
            'relative',
            'mt-10 lg:mt-10',
            '[--size:80px] sm:[--size:120px] md:[--size:170px] lg:[--size:200px] xl:[--size:250px] 2xl:[--size:300px]',
            '*:multi-[text-center;font-rubik;uppercase;[font-size:--size]]'
          )}
        >
          <h1 className='relative z-10 text-primary'>$POUND</h1>
          <h1 className='absolute left-0 top-2 w-full text-black'>$POUND</h1>
        </div>

        <footer className='mt-10 flex justify-center'>
          <div className='rounded-[6px] border border-black bg-primary px-4 py-3 text-center font-rubik text-[20px] uppercase text-white'>
            Copyright © 2024 $POUND
          </div>
        </footer>
      </div>
    </main>
  );
}
