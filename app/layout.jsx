import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ! Components
import Header from "@/components/Header";

const jetBrainsMono= JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Hamza Portfolio",
  description: "Hamza Cherkaoui Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
        </body>
    </html>
  );
}
