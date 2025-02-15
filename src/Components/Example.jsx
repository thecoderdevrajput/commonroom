

const Example = () => {
  return (
    <>
        <div className='ml-32 bg-white h-64 w-72 rounded-lg '>
          <div className='flex gap-4 pl-5 pt-6'>
        <img className="h-10 w-10 rounded-md " src="snowflakelogo.png" alt="snowflake" />

        <img className="h-10 w-10 rounded-md" src="census.png" alt="census" >
        </img>

        <img className="h-10 w-10 rounded-md " src="hightouch.png" alt="hightouch">
        </img>

        <img className="h-10 w-10 rounded-md " src="awss3.png" alt="awss3">
        </img>
        </div>

        <div>
        <h1 className='roboto font-semibold text-neutral-800 mt-5 pl-5 pt-3'>Product-led? No problem</h1>
        <h2 className='roboto font-normal text-neutral-500 text-base pl-5 pt-1'>Pull in product data with built-in integrations for your data warehouse, CDP, or reverse ETL platform.</h2>
        </div>
        </div>
        </>
  )
}

export default Example