import './globals.css';

export const metadata = {
  title: 'ALSA English Competition 2025',
  description: 'ALSA English Competition 2025',
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background relative font-kaisar font-bold antialiased`}>
        <div
          className="absolute inset-0 -z-10 bg-repeat opacity-30"
          style={{
            backgroundImage: "url('/texture.webp')",
            backgroundSize: '500px',
          }}
        />
        {children}
      </body>
    </html>
  );
}
