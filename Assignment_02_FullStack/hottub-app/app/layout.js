import './globals.css';

export const metadata = {
  title: 'HotSpring - Portable Spas',
  description: 'Premium hot tub and spa products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen m-0 p-0 font-sans tracking-tight">
        {children}
      </body>
    </html>
  );
}
