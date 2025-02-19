import NavBar from '@/components/navbar';
import './globals.css';
import Head from 'next/head';
import Footer from '@/components/footer';

export const metadata = {
  title: 'ALSA English Competition 2025',
  description: 'ALSA English Competition 2025',
  icons: {
    icon: '/logo.svg',
  },
  // other: {
  //   'link-preload': {
  //     rel: 'preload',
  //     href: '/texture.webp',
  //     as: 'image',
  //     type: 'image/webp',
  //   },
  // 'link-preload-2': {
  //   rel: 'preload',
  //   href: '/public/texture.webp',
  //   as: 'image',
  //   type: 'image/webp',
  // },
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/texture.webp"
          as="image"
          type="image/webp"
        />
        {/* <link
          rel="preload"
          href="/public/texture.webp"
          as="image"
          type="image/webp"
        /> */}
      </Head>
      <body className={`relative bg-background font-kaisar font-bold antialiased`}>
        <NavBar />
        <div
          className="absolute inset-0 -z-10 bg-repeat opacity-30"
          style={{
            backgroundImage: "url('/texture.webp')",
            backgroundSize: '500px',
          }}
        />
        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
