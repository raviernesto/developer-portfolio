import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import ToastProvider from "./components/helper/toast-provider";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ravi Shankar S - Software Developer",
  description: `This is the portfolio of Ravi Shankar S. Results-driven Angular developer with over 3 years of hands-on experience in building scalable and high-performance front-end
applications. Proficient in Angular, TypeScript, and RESTful services, with a proven track record of delivering robust solutions for
enterprise clients. Strong collaborator with experience in Agile teams, code reviews, and cross-functional API integration. Recognized
for improving user satisfaction, performance, and system security. Seeking a challenging role in a forward-thinking organization to apply
technical skills to mission-critical projects.`,
  icons: {
    // Prioritize profile.jpg for the favicon across browsers
    icon: [
      { url: "/profile.jpg?v=2", type: "image/jpeg", sizes: "16x16" },
      { url: "/profile.jpg?v=2", type: "image/jpeg", sizes: "32x32" },
      { url: "/profile.jpg?v=2", type: "image/jpeg", sizes: "48x48" },
    ],
    apple: [
      { url: "/profile.jpg?v=2", sizes: "180x180" },
    ],
    // Shortcut icon also points to the new image (helps older browsers)
    shortcut: ["/profile.jpg?v=2"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GTM ? (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        ) : null}
      </head>
      <body className={inter.className}>
  <ToastProvider />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
