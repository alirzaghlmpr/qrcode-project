import "./globals.css";
import AuthProvider from "@/components/layouts/AuthProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
