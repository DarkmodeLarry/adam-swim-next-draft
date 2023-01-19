function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-sky-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>Coach Adam</p>
        <p>Technique</p>
        <p>The Swim Team</p>
        <p>Swimming Benefits</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Against Discrimination</p>
        <p>Accessibility</p>
        <p>Gatherings</p>
        <p>Referrals</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Team Support</p>
        <p>Trust & Safety</p>
      </div>
    </div>
  )
}

export default Footer
