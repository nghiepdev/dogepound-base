import Image from 'next/image';
import clsx from 'clsx';

import heroImg from './hero.svg';
import logoImg from './logo.png';
import pound0 from './pound-0.png';
import wave from './wave.svg';

export default function Hero() {
  return (
    <div
      className={clsx(
        'relative bg-white',
        'pb-10 sm:pb-20 lg:pb-28 xl:pb-36 2xl:pb-48'
      )}
    >
      <Image
        src={heroImg}
        priority
        fill
        alt=''
        className='object-cover object-top backdrop-blur-[2px]'
      />
      <div
        className={clsx(
          'relative flex',
          'gap-x-5 sm:gap-x-8 lg:gap-x-12 2xl:gap-x-24',
          'px-5 lg:px-10 2xl:px-12'
        )}
      >
        <div className='flex max-w-[min(837px,100%)] grow flex-col gap-y-10 pt-8'>
          <header
            className={clsx(
              'flex items-center justify-between rounded-full border-[6px] border-b-8 border-black bg-[#528DFF] text-white',
              'px-5 py-1'
            )}
          >
            <div className='flex items-center gap-x-2'>
              <Image
                src={logoImg}
                quality={100}
                priority
                alt=''
                className='shrink-0'
              />
              <span className='text-3xl md:text-4xl'>$POUND</span>
            </div>
            <div
              className={clsx(
                'flex shrink-0 items-center',
                'gap-x-2 sm:gap-x-5 lg:gap-x-7',
                '[--size:50px] md:[--size:61px]',
                '[&_img]:multi-[size-[--size];aspect-square;object-contain;animate-spin;[animation-duration:2s]]',
                '[&>*:hover_img]:[animation-play-state:paused]'
              )}
            >
              <a href={process.env.NEXT_PUBLIC_X_URL} target='_x'>
                <img src='/x.png' alt='' />
              </a>
              <a href={process.env.NEXT_PUBLIC_TELE_URL} target='_tele'>
                <img src='/tele.png' alt='' />
              </a>
              <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
                <img src='/dexs.png' alt='' />
              </a>
            </div>
          </header>
          <h1 className='text-center text-3xl font-bold uppercase sm:text-4xl md:hidden'>
            Coinbase&apos;s Doge Pound
          </h1>
          <article
            className={clsx(
              'box-shadow mt-auto rounded-[26px] border border-black bg-[rgba(153,200,255,0.50)] font-disney uppercase',
              'p-4 lg:px-8',
              'text-xl xl:text-2xl 2xl:text-[27px] 2xl:leading-9',
              '2xl:max-w-[95%]'
            )}
          >
            $POUND - Coinbase&apos;s Doge Pound. The unique meme dog of Coinbase
            in the collection The Doge Pound. Pound appeared on the official
            Instagram account of Coinbase on April 19, 2022, with striking blue
            hair and a special Coinbase collar. Dog lovers, if you haven&apos;t
            met them yet, you&apos;re gonna love this community.
          </article>
        </div>
        <aside className='hidden shrink-0 md:block'>
          <div
            className={clsx(
              'flex justify-center',
              'mt-12 sm:mt-20 lg:mt-28 xl:mt-36 2xl:mt-48'
            )}
          >
            <Image
              src={pound0}
              quality={100}
              priority
              alt=''
              className='max-w-[200px] xl:max-w-[250px] 2xl:max-w-none'
            />
          </div>
          <div
            className={clsx(
              'rounded-[15px] border border-primary bg-secondary uppercase',
              'text-xl  xl:text-2xl 2xl:text-3xl',
              'px-5 py-2'
            )}
          >
            Coinbase&apos;s Doge Pound
          </div>
        </aside>
      </div>
      <div className='absolute bottom-0 h-[80px] md:h-[120px] xl:h-[200px]'>
        <Image src={wave} alt='' className='w-full object-contain object-top' />
      </div>
    </div>
  );
}
