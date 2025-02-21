'use client'

import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Header />
      {children}
      <Toaster />
    </main>
  );
}
