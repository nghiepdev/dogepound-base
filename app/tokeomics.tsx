import clsx from 'clsx';

export default function Tokenomics() {
  return (
    <div
      className={clsx(
        'rounded-[31px] border-black bg-[#FFFEE5]',
        'border-b-[10px] border-l-8 lg:border-b-[16px] lg:border-l-[13px]',
        'p-5 lg:multi-[px-10;py-5] 2xl:multi-[px-20;py-10]'
      )}
    >
      <h2 className='text-center text-3xl leading-none sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px]'>
        DOGE $POUND TOKENOMICS
      </h2>
      <div
        className={clsx(
          'grid text-center uppercase',
          'mt-6 sm:mt-10',
          '[--min:300px] lg:[--min:380px]',
          'grid-cols-[repeat(auto-fill,minmax(min(var(--min),100%),1fr))]',
          'gap-x-6 gap-y-4 sm:multi-[gap-x-8;gap-y-5] lg:multi-[gap-x-12;gap-y-10] 2xl:multi-[gap-x-20;gap-y-16]',
          '*:multi-[bg-primary;border-2;border-[#110505];rounded-[20px];px-5;py-5]',
          '[&_h3]:text-2xl lg:[&_h3]:text-2xl xl:[&_h3]:text-3xl 2xl:[&_h3]:text-[32px]',
          '[&_p]:multi-[text-3xl;text-white] lg:[&_p]:text-4xl 2xl:[&_p]:text-5xl'
        )}
      >
        <article>
          <h3>TOKEN TICKER</h3>
          <p>$POUND</p>
        </article>
        <article>
          <h3>Total Supply</h3>
          <p>1,000,000,000</p>
        </article>
        <article>
          <h3>LP</h3>
          <p>BURNED</p>
        </article>
        <article>
          <h3>Contract</h3>
          <p>Renounced</p>
        </article>
      </div>
    </div>
  );
}
