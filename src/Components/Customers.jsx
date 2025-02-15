


const Customers = () => {
  return (
    <>
    <div className='min-h-screen bg-[#F8F5FB]'>
      <div className='mt-80 ml-44'>
        <h1 className='text-base text-violet-800 roboto font-medium'>Customers</h1>

        <h1 className='text-3xl font-bold roboto text-neutral-800 mt-2'>The fastest-growing SaaS & AI <br /> companies choose Common Room</h1>

        <button className='px-4 py-2 bg-neutral-800 text-white roboto font-medium text-base rounded-lg mt-4 hover:bg-neutral-700 '>See our customers</button>


        <div className='h-14 flex gap-10 mt-12'>
          <img src="airbyte.png" alt="airbyte" />
          <img src="airtable.png" alt="airtable" />
          <img src="amplitude.png" alt="amplitude" />
          <img src="apollo.png" alt="apollo" />
          <img src="asana.png" alt="asana" />
          <img className='h-8 mt-2' src="clay.png" alt="clay" />
        </div>

        <div className='h-14 gap-10 flex mt-12'>
          <img src="clickhouse.png" alt="clickhouse" />
          <img className=' -ml-2' src="confluent.png" alt="confluent" />
          <img className=' -ml-7' src="databricks.png" alt="databricks" />
          <img className='ml-2' src="dbt.png" alt="dbt" />
          <img src="docker.png" alt="docker" />
          <img src="elastic.png" alt="elastic" />
        </div>

        <div className='h-14 flex gap-10 mt-12'>
          <img src="figma.png" alt="figma" />
          <img className='ml-8' src="gitlab.png" alt="gitlab" />
          <img className='ml-1' src="grafana.png" alt="grafana" />
          <img className='-ml-2' src="hubspot.png" alt="hubspot" />
          <img className='ml-6' src="mongodb.png" alt="mongodb" />
          <img src="notion.png" alt="notion" />
        </div>

        <div className='h-14 flex gap-10 mt-12'>
          <img className='ml-2' src="pulumi.png" alt="pulumi" />
          <img className='-ml-2' src="snowflake.png" alt="snowflake" />
          <img src="temporal.png" alt="temporal" />
          <img className='ml-6' src="vercel.png" alt="vercel" />
          <img className='ml-5' src="webflow.png" alt="webflow" />
          <img className='-ml-2' src="zapier.png" alt="zapier" />
        </div>



        
      </div>
    </div>
    </>
  )
}

export default Customers