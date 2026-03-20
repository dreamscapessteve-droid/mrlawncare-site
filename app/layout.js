export const metadata = {
  title: "Mr Lawncare",
  description: "Professional lawn care and landscaping in Cheektowaga, NY",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
