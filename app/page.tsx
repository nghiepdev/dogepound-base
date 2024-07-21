import Image from 'next/image';
import clsx from 'clsx';

import Hero from './hero';

export default function Home() {
  return (
    <main className='mx-auto max-w-screen-2xl'>
      <Hero />
    </main>
  );
}
