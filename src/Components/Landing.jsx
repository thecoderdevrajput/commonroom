

const Landing = () => {
  return (
    <>
    <div className='h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200'>
         <div className='justify-center justify-items-center'>
            <button className='text-[#723EC7] rounded-full text-base font-medium border-2 border-[#723EC7] px-4 py-0.5 mt-16 cursor-text'>Customer Intelligence Platform</button>

            <h1 className='text-5xl roboto font-semibold text-neutral-800 mt-5'>Run go-to-market <br /><span className='ml-16'>intelligently.</span> </h1>


            <h1 className='roboto text-3xl font-semibold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-yellow-600'>Unlock 30% more revenue in half the time.</h1>

            <h1 className='roboto font-medium text-base text-neutral-800 mt-5'>Capture every buying signal. Give your team superpowers with AI enrichment and <br /><span className='ml-4'>automation to reach the right person with the right context at the right time.</span></h1>

            <button className='roboto bg-neutral-800 text-white font-medium mt-3 px-4 py-1.5 rounded-lg hover:bg-neutral-600'>Book a demo</button>

            <button className='roboto text-white font-medium px-4 py-1.5 bg-violet-700 rounded-lg ml-2 hover:bg-violet-600'>Start for free</button>

          
            <video
        className="mt-12 h-2/3 w-2/3 border-8 border-white rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
         </div>
    </div>

    </>
  )
}

export default Landing