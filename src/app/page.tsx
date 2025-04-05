import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex p-6 sm:p-12 flex-col sm:flex-row gap-5 sm:gap-0 min-h-screen items-start justify-start sm:justify-start'>
      {/* Left Content Column */}
      <div className='flex w-full sm:basis-2/4 flex-col gap-4 sm:gap-6 items-center sm:items-start justify-center sm:justify-start h-full'>
        {/* Logo */}
        <div className='flex items-center z-50 justify-center gap-2'>
          <Image
            src='/logo.svg'
            alt='Next.js logo'
            width={40}
            height={40}
            priority
            className='w-8 h-8 sm:w-10 sm:h-10'
          />
          <h1 className='text-neutral-700 font-bold text-lg sm:text-xl'>GlobalConnect</h1>
        </div>

        {/* Main Heading */}
        <h1 className='text-[60px] sm:text-[80px] lg:text-[100px] mt-2 sm:mt-4 leading-[0.9] font-bold text-neutral-700 -my-1 sm:-my-2'>
          Launching
          <br />
          Soon
        </h1>

        {/* Paragraph */}
        <p className='text-neutral-500 text-xs sm:text-sm md:text-base text-left -space-y-1 mt-4 sm:mt-6 md:mt-8 max-w-md'>
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

        {/* Button (centered but not full-width on mobile) */}
        <div className='flex justify-center sm:justify-start w-full mt-4 sm:mt-6'>
          <button className='bg-[#00539B] rounded-lg text-white text-base sm:text-lg md:text-xl px-5 sm:px-6 md:px-8 py-2 sm:py-3 font-medium'>
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image Column */}
      <div className='w-full sm:basis-2/4 flex items-center justify-center sm:justify-end sm:mt-12'>
        <Image
          className='w-full max-w-2xl'
          src='/new-group.png'
          alt='GlobalConnect illustration'
          width={600}
          height={400}
          priority
          style={{
            objectFit: 'contain',
            height: 'auto'
          }}
        />
      </div>
    </div>
  )
}