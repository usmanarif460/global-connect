import Image from "next/image";

export default function Home() {
  return (
    <div className="flex p-4 sm:p-8 md:p-12 flex-col sm:flex-row gap-4 sm:gap-0 min-h-screen items-start justify-start">
      {/* Left Content Column */}
      <div className="flex w-full sm:basis-2/4 flex-col gap-3  items-start justify-start h-full">
        {/* Logo - Left aligned on all devices */}
        <div className="flex items-center z-50 gap-2">
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

        {/* Main Heading - Left aligned on all devices */}
        <h1 className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] mt-8 sm:mt-4 leading-[0.9] font-bold text-neutral-700 -my-1 sm:-my-2">
          Launching
          <br />
          Soon
        </h1>

        {/* Paragraph - Left aligned on all devices */}
        <p className="text-neutral-500 text-sm  md:text-base -space-y-1 mt-3 sm:mt-4 md:mt-6 w-7/12">
          Tech doesn&apos;t have to feel like a different language. We built
          GlobalConnect to make sure innovation works for you, your business,
          and your people. We can&apos;t wait to innovate with you!
        </p>

        {/* Button - Centered on mobile, left aligned on desktop */}
        <div className="flex justify-center sm:justify-start w-full mt-4 sm:mt-6">
          <button className="bg-[#00539B] rounded-lg text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-medium">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="w-full sm:basis-2/4 flex items-center justify-center sm:justify-end mt-6 sm:mt-12 px-2 sm:px-0">
        <Image
          className="w-full max-w-xl"
          src="/new-group.png"
          alt="GlobalConnect illustration"
          width={600}
          height={400}
          priority
          style={{
            objectFit: "contain",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
