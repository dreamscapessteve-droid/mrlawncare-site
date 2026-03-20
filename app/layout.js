import "./globals.css";

export const metadata = {
  title: "Mr Lawncare",
  description: "Professional lawn care and landscaping in Cheektowaga, NY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
