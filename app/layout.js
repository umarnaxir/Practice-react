import "./globals.css";
import { ThemeProvider } from "../app/context/ThemeContext";
import PortalRoot from "./components/PortalRoot";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white} antialiased`}>
        <ThemeProvider>
          {children}
          <PortalRoot />
        </ThemeProvider>
      </body>
    </html>
  );
}
