import "./globals.css";
import { Public_Sans } from "next/font/google";

import { LiveWellNavBar } from "@/components/LiveWellNavBar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Livewell - Online Weight Loss, Birth Control, Acne Treatments</title>
        <meta property="og:description" content="Livewell is a healthcare company designed to help you meet your health goals. We connect patients with Canadian-licensed healthcare professionals all online. Get started today."></meta>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:title" content="Livewell - Online Weight Loss, Birth Control, Acne Treatments"/>
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain + Next.js Template" />
        <meta
          name="twitter:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <LiveWellNavBar></LiveWellNavBar>
          <div>
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
