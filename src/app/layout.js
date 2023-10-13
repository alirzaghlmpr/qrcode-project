import "./globals.css";
import AuthProvider from "@/components/layouts/AuthProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
