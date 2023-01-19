import { useRouter } from 'next/router'
import { format } from 'date-fns'
import Footer from '../components/Footer'
import Header from '@/components/Header'

function Search() {
  const router = useRouter()
  const { location, startDate, endDate, numberOfGuests } = router.query

  return (
    <div className='h-screen'>
      <Header placeholder='' />

      <main className='flex'>
        {/* left side of listings */}
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>Over 100+ students</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Swim on Mars</h1>

          <div className='hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibity</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
          <div className='flex flex-col'></div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]'></section>
      </main>

      <Footer />
    </div>
  )
}

export default Search
