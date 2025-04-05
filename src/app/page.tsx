import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex  p-12 flex-col sm:flex-row gap-5 sm:gap-0  h-screen  items-start   justify-start sm:justify-start '>
      <div className='flex w-full sm:basis-2/4 flex-col gap-6 items-center sm:items-start sm:justify-start justify-center h-full '>
        <div className='flex items-center z-50 justify-center gap-2 '>
          <Image
            src='/logo.svg'
            alt='Next.js logo'
            width={40}
            height={40}
            priority
          />
          <h1 className='text-neutral-700 font-bold'>GlobalConnect</h1>
        </div>
        <h1 className='text-[100px] mt-4 leading-[0.9] font-bold text-neutral-700 -my-2'>
          Launching
          <br />
          Soon
        </h1>
        <p className='text-neutral-500 text-sm md:text-base text-left -space-y-1 mt-8'>
          <span className='block'>
            Tech doesn&apos;t have to feel like a different language.
          </span>
          <span className='block'>
            We built GlobalConnect to make sure innovation
          </span>
          <span className='block'>
            works for you, your business, and your people.
          </span>
          <span className='block'>
            We can&apos;t wait to innovate with you!
          </span>
        </p>
        <button className='bg-[#00539B] rounded-lg text-white text-lg sm:text-2xl sm:px-8 px-5 py-2 sm:py-3 font-medium'>
          Contact Us
        </button>
      </div>
      <Image
        className='w-full sm:mt-12 sm:basis-2/4'
        src='/new-group.png'
        alt='Next.js logo'
        width={180}
        height={38}
        priority
      />
    </div>
  )
}
