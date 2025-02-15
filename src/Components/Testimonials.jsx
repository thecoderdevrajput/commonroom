

const Testimonial= () => {
  return (
    <>

    <div className='justify-center text-center bg-[#F8F5FB] pt-5'>
    <h3 className='roboto text-base text-[#7C3AED] font-semibold'>Testimonials</h3>
    <h1 className='roboto text-4xl font-bold text-gray-900'>Trusted by leading orgs of all sizes</h1>
    </div>

    <div className='min-h-screen bg-[#F8F5FB] justify-center justify-items-center flex gap-8'>
        
    <div className='bg-white border border-white w-72 h-2/3 px-6 py-6 rounded-lg mt-10'>
    
    <img className='h-14 ml-14 -mt-3' src="temporal.png" alt="temporal" />
<h1 className='roboto text-neutral-500 text-base'>Common Room gives our go-to-market team members daily feeds of users showing intent across multiple channels—all in one place. Over 50% of our meetings come from Common Room.</h1>

    <div className='flex mt-28 mb-3'>
    <img className='rounded-full h-12' src="tim.png" alt="tim" />
    <h1 className='text-sm roboto ml-4'>Tim Hughes <br /> <span className='roboto text-xs font-light text-neutral-700'>VP of Sales</span></h1>
    
    </div>

    </div>



    <div className='bg-white border border-white w-72 h-2/3 px-6 py-6 rounded-lg mt-10'>
    
    <img className='h-14 ml-14 -mt-3' src="dbt.png" alt="dbt" />
<h1 className='roboto text-neutral-500 text-base'>Common Room makes me a hell of a lot more efficient. I have a lot of AEs to support, and I need to deliver pipeline for them. Common Room is a big part of that. I can book meetings much more quickly.</h1>

    <div className='flex mt-16'>
    <img className='rounded-full h-12' src="aaron.png" alt="aaron" />
    <h1 className='text-sm roboto ml-4'>Aaron Munro <br /> <span className='roboto text-xs font-light text-neutral-700'>Sales and Business Development Leader, EMEA</span></h1>
    
    </div>

    </div>


    <div className='bg-white border border-white w-72 h-2/3 px-6 py-6 rounded-lg mt-10'>
    
    <img className='h-14 ml-14 -mt-4' src="airbyte.png" alt="airbyte" />
<h1 className='roboto text-neutral-500 text-base'>We’re turning Common Room into our go-to-market command center. We’re pulling in signals like product usage, job changes, news events, and more, identifying high-fit contacts, and automating action on them. With Common Room, every rep can be a top performer.</h1>

    <div className='flex mt-20 mb-7'>
    <img className='rounded-full h-12' src="jean.png" alt="erica" />
    <h1 className='text-sm roboto ml-4'>Jean Lafleur <br /> <span className='roboto text-xs font-light text-neutral-700'>Cofounder and COO, Airbyte</span></h1>
    
    </div>
    
    
    </div>
    

    </div>

    <div className=' place-items-center'>
    <h1 className='roboto rounded-md font-semibold text-sm -mt-24 px-3 py-1.5 border-black hover:text-white hover:bg-[#7C3AED] hover:scale-105 bg-black text-white'>See All Stories</h1>
    </div>
    
    </>
  )
}

export default Testimonial