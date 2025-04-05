import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#D6E8EB] p-12 flex-col sm:flex-row gap-5 sm:gap-0  h-screen  items-start  pt-36 justify-start sm:justify-center ">
      <div className="flex items-center justify-center gap-2 fixed top-8 left-12">
        <Image
          src="/logo.svg"
          alt="Next.js logo"
          width={40}
          height={40}
          priority
        />
        <h1 className="text-neutral-500 font-semibold">GlobalConnect</h1>
      </div>

      <div className="flex w-full sm:basis-2/4 flex-col gap-6 items-center sm:items-start justify-center sm:pt-20">
        <h1 className="text-[60px] leading-16 font-semibold text-neutral-500">
          Launching Soon
        </h1>
        <p className="text-neutral-500 text-sm text-left sm:text-balance">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa error,
          inventore sequi nesciunt odio dolorem! Ipsam nulla ea suscipit
          voluptatum autem quisquam impedit odio doloribus quibusdam magnam,
          sequi rerum enim.
        </p>
        <button className="bg-[#00539B] rounded-lg text-white text-2xl px-8 py-3 font-medium">
          Contact Us
        </button>
      </div>
      <Image
        className="w-full sm:basis-2/4"
        src="/new-group.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
