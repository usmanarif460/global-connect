// Home.tsx or page.tsx
import { Camera, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <Image
            src="/logo.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h1 className="text-neutral-700 font-bold text-lg sm:text-xl">
            GlobalConnect
          </h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:gap-12 ">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8">
              Launching
              <br />
              soon
            </h1>
            <p className="text-base  text-center md:text-left opacity-90 mb-10 max-w-md">
              Tech doesn&apos;t have to feel like a different language. We built
              GlobalConnect to make sure innovation works for you, your
              business, and your people. We can&apos;t wait to innovate with
              you!
            </p>
            <Link
              href="#contact"
              className="inline-block tracking-wider transition-colors bg-[#00539B] rounded-lg text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-medium"
            >
              Contact Us
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-6 md:mt-16 mt-8">
              <div className="flex items-center gap-2">
                <Camera className="w-10 h-10" />
                <span className="text-gray-500 font-medium text-sm">
                  GET SOCIAL
                </span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center border border-black">
                <span className="font-bold">文</span>
              </div>
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-black" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6 text-black" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-black" />
              </Link>
            </div>
          </div>

          {/* Image with decorative elements */}
          <div className="relative w-full max-w-md lg:max-w-xl aspect-square">
            <div className="sm:basis-2/4 flex md:h-full mt-8 md:mt-0 items-center justify-center px-4 sm:px-0">
              <Image
                src="/new-group.png"
                alt="GlobalConnect illustration"
                width={800}
                height={600}
                priority
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
