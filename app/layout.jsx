import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });
const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Kim de Cuba — From Idea to Action",
  description:
    "Helping aspiring and emerging entrepreneurs turn their ideas, skills and potential into clear direction and practical next steps. 75-minute 1:1 Idea-to-Action sessions in Aruba.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
