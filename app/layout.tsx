import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Jerome Haynes | Full-Stack Developer & Software Engineer",
  description:
    "Hi there! I'm a software engineer with a deep passion for coding and using technology to make a positive impact. With strong expertise in frontend development, I love creating user-friendly, visually appealing web experiences. While my focus is on the frontend, I also have the skills to build and maintain reliable backend systems. Dive into my projects to see how I leverage technology to solve real-world problems and bring ideas to life.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <ThemeToggle />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
