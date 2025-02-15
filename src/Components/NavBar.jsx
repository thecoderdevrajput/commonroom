import  { useState, useEffect } from 'react'


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5); // Adjust the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);








  return (
    <>
    <div className=' bg-white w-full flex top-0 left-0 h-12 fixed'>
        <img className='h-5 ml-40 mt-4 cursor-pointer' src="crlogo.png" alt="common room logo" />

        <ul className='flex ml-16 gap-2 roboto text-sm font-medium'>
            <li className=' hover:bg-slate-50 px-3 py-1 mt-3 cursor-pointer rounded-md'>Product</li>
            <li className=' hover:bg-slate-50 px-3 py-1 mt-3 cursor-pointer rounded-md'>Solutions</li>
            <li className=' hover:bg-slate-50 px-3 py-1 mt-3 cursor-pointer rounded-md'>Resources</li>
            
            <li className='hover:text-[#723ec7] hover:bg-slate-50 cursor-pointer px-3 py-1 mt-3 rounded-md'>Customers</li>
            <li className='hover:text-[#723ec7] hover:bg-slate-50 cursor-pointer px-3 py-1 mt-3 rounded-md'>Pricing</li>
            
        </ul>

        <div className='flex roboto text-sm font-medium gap-3 '>
            
            {isScrolled ? (<button className='text-black mt-3 hover:text-white hover:bg-black px-3 py-1 ml-10 bg-slate-50 rounded-md mb-2 cursor-pointer'>Book a demo </button>):(<button className='text-gray-500 ml-20 mt-3 hover:text-[#723ec7] hover:bg-slate-100 px-3 py-1 rounded-md cursor-pointer mb-2'>Log in </button>)}


            <button className='bg-[#723ec7] right-44 fixed text-white px-3 mt-3 py-1 rounded-md hover:bg-black  '>Start for free</button>

        </div>
        </div>
            

    </>
  )
}

export default NavBar;