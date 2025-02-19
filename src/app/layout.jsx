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
      <body className={`font-kaisar font-bold antialiased`}>{children}</body>
    </html>
  );
}
