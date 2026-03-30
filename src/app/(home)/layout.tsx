"use client";

import HomeLayout from "@/layout/home/HomeLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
