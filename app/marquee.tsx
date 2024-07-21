import clsx from 'clsx';

import BaseMarquee, {
  MarqueeProps as BaseMarqueeProps,
} from 'react-fast-marquee';

interface MarqueeProps extends React.PropsWithChildren {
  direction?: BaseMarqueeProps['direction'];
}

export default function Marquee({children, direction}: MarqueeProps) {
  return (
    <BaseMarquee pauseOnHover direction={direction}>
      <div
        className={clsx(
          'flex',
          'gap-5 pl-5 2xl:multi-[gap-9;pl-9]',
          '[&_img]:multi-[w-[--size];object-cover;rounded-[20px];block;overflow-hidden;border-[5px];border-black]',
          '[--size:170px] sm:[--size:250px] lg:[--size:350px] 2xl:[--size:415px]'
        )}
      >
        {children}
      </div>
    </BaseMarquee>
  );
}
