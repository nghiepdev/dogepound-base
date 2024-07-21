import type {Metadata} from 'next';
import {Happy_Monkey, Rubik_Wet_Paint} from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import clsx from 'clsx';

const font = Happy_Monkey({
  weight: ['400'],
  subsets: ['latin'],
});

const rubikFont = Rubik_Wet_Paint({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--rubik-font',
});

const disneyFont = localFont({
  src: './VNI-Disney.ttf',
  variable: '--disney-font',
});

export const metadata: Metadata = {
  title: "Coinbase's Doge Pound",
  description:
    "$POUND - Coinbase's Doge Pound. The unique meme dog of Coinbase in the collection The Doge Pound. Pound appeared on the official Instagram account of Coinbase on April 19, 2022, with striking blue hair and a special Coinbase collar. Dog lovers, if you haven't met them yet, you're gonna love this community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          font.className,
          rubikFont.variable,
          disneyFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
