import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import CardInsights from "@/Components/Card/Templates/Insights";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CardInsights />
    </>
  );
}
