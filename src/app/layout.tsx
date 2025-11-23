import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MeasurementDeviceProvider } from "@/lib/hardware/MeasurementDeviceContext";
import { DeviceSelector } from "@/components/measurements/DeviceSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LED Cinema CTP System",
  description: "DCI Compliance Test Plan Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <MeasurementDeviceProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="hidden font-bold sm:inline-block">
                      DCI CTP System
                    </span>
                  </Link>
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/devices" className="transition-colors hover:text-foreground/80 text-foreground/60">
                      Devices
                    </Link>
                    <Link href="/sessions" className="transition-colors hover:text-foreground/80 text-foreground/60">
                      Test Sessions
                    </Link>
                    <Link href="/measurements" className="transition-colors hover:text-foreground/80 text-foreground/60">
                      Measurements
                    </Link>
                    <Link href="/ctp" className="transition-colors hover:text-foreground/80 text-foreground/60">
                      CTP Overview
                    </Link>
                  </nav>
                </div>
                {/* 右侧设备选择器 */}
                <div className="ml-auto flex items-center space-x-4">
                  <DeviceSelector />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </MeasurementDeviceProvider>
      </body>
    </html>
  );
}
