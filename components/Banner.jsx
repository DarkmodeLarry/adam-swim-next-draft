import Image from 'next/image'
import BoySwim from '../public/boyswim.webp'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src={BoySwim} alt='banner' fill='cover' className='' />
      <div className='absolute top-1/2 w-full text-left'>
        <p className='text-sm sm:text-lg'>Not sure where to start? Perfect.</p>
        <button className='text-cyan-800 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:border-8 hover:border-double hover:border-emerald-500 active:scale-90 transition-all duration-300 ease-in-out'>
          ADAM SWIM
        </button>
      </div>
    </div>
  )
}
export default Banner
