import { Jura } from "next/font/google";
import { Kode_Mono } from "next/font/google";

const primaryFont = Jura({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Kode_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
}
