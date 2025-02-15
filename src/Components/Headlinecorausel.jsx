/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';

// A reusable component for displaying content
const SlideContent = ({ content }) => {
  return (
    
    <div className="text-lg">
      {content.heading && <h3 className="text-2xl roboto text-neutral-800 ml-32 mt-8 font-semibold mb-2">{content.heading}</h3>}
      {content.subheading && <h4 className="text-base font-normal w-2/3 mt-8 roboto ml-32 mb-4">{content.subheading}</h4>}
      {content.button && <h4 className="text-base roboto text-violet-700 ml-32 hover:underline font-medium mb-4">{content.button}</h4>}
      {content.image && (
        <img src={content.image} alt="Slide content" className="mx-auto w-2/3 h-2/3 ml-32 mb-4" />
      )}
      {content.tools && (
        <>
        <div className='flex'>
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


        <div className='ml-8 bg-white h-64 w-72 rounded-lg '>
          <div className='flex gap-4 pl-5 pt-6'>
        <img className="h-10 w-10 rounded-md " src="salesforce.png" alt="salesforce" />

        <img className="h-10 w-10 rounded-md" src="hubspotlogo.png" alt="hubspot" >
        </img>

        <img className="h-10 w-10 rounded-md " src="gong.png" alt="gong">
        </img>

        <img className="h-10 w-10 rounded-md " src="outreach.png" alt="outreach">
        </img>
        </div>

        <div>
        <h1 className='roboto font-semibold text-neutral-800 mt-5 pl-5 pt-3'>GTM source of truth</h1>
        <h2 className='roboto font-normal text-neutral-500 text-base pl-5 pt-1'>Connect the dots to close with native integrations for CRM, marketing automation, and sales engagement platforms.</h2>
        </div>
        </div>

        <div className='ml-8 bg-white h-64 w-72 rounded-lg '>
          <div className='flex gap-4 pl-5 pt-6'>
        <img className="h-10 w-10 rounded-md " src="slack.png" alt="slack" />

        <img className="h-10 w-10 rounded-md" src="discord.png" alt="discord" >
        </img>

        <img className="h-10 w-10 rounded-md " src="discourse.png" alt="discourse">
        </img>

        <img className="h-10 w-10 rounded-md " src="meetup.png" alt="meetup">
        </img>
        </div>

        <div>
        <h1 className='roboto font-semibold text-neutral-800 mt-5 pl-5 pt-3'>Unlock community growth</h1>
        <h2 className='roboto font-normal text-neutral-500 text-base pl-5 pt-1'>Activate your community with native integrations and automations for Slack and Discord.</h2>
        </div>
        </div>
        </div>



        <div className='flex mt-5'>
        <div className='ml-32 bg-white h-64 w-72 rounded-lg '>
          <div className='flex gap-4 pl-5 pt-6'>
        <img className="h-10 w-10 rounded-md " src="youtube.png" alt="youtube" />

        <img className="h-10 w-10 rounded-md" src="reddit.png" alt="reddit" >
        </img>

        <img className="h-10 w-10 rounded-md " src="medium.png" alt="medium">
        </img>

        <img className="h-10 w-10 rounded-md " src="x.png" alt="x">
        </img>
        </div>

        <div>
        <h1 className='roboto font-semibold text-neutral-800 mt-5 pl-5 pt-3'>Shine light on the dark funnel</h1>
        <h2 className='roboto font-normal text-neutral-500 text-base pl-5 pt-1'>Detect early intent signals happening on user forums, communities, and social channels.</h2>
        </div>
        </div>


        <div className='ml-8 bg-white h-64 w-72 rounded-lg '>
          <div className='flex gap-4 pl-5 pt-6'>
        <img className="h-10 w-10 rounded-md " src="github.png" alt="github" />

        <img className="h-10 w-10 rounded-md" src="stackoverflow.png" alt="stackoverflow" >
        </img>

        <img className="h-10 w-10 rounded-md " src="dev.png" alt="dev">
        </img>

        </div>

        <div>
        <h1 className='roboto font-semibold text-neutral-800 mt-5 pl-5 pt-3'>Git after it</h1>
        <h2 className='roboto font-normal text-neutral-500 text-base pl-5 pt-1'>Connect to GitHub and other code collab sources to identify the person behind the pull request.</h2>
        </div>
        </div>

        <div className='ml-8 bg-white h-64 w-72 rounded-lg '>
          <div className='flex gap-4 pl-5 pt-6'>
        <img className="h-10 w-10 rounded-md " src="commonroomapi.png" alt="commonroomapi" />

        <img className="h-10 w-10 rounded-md" src="zapierlogo.png" alt="zapier" >
        </img>

        <img className="h-10 w-10 rounded-md " src="googlesheet.png" alt="googlesheet">
        </img>

        <img className="h-10 w-10 rounded-md " src="csv.png" alt="csv">
        </img>
        </div>

        <div>
        <h1 className='roboto font-semibold text-neutral-800 mt-5 pl-5 pt-3'>Data your way</h1>
        <h2 className='roboto font-normal text-neutral-500 text-base pl-5 pt-1'>Need to connect to something we have not thought of? Use our API, webhooks, Zapier, or CSV import.</h2>
        </div>
        </div>
        </div>
        </>
      )}



    </div>
  );
};

const HeadlineCarousel = () => {
  // Define headlines and contents
  const slides = [
    {
      headline: 'Signals',
      content: {
        heading: 'Capture every signal with AI and Connect effortlessly.',
        subheading: 'Common Room provides the most comprehensive set of signals available anywhere—out of the box. Auto-collect and unify buying signals with AI across 50-plus channels spanning product, CRM, website, social, community, open source, and beyond.',
        button: 'See Signals',
        image: 'signals.png'
      }
    },
    {
      headline: 'Person360',
      content: {
        heading: 'Connect with the person behind the signal',
        subheading: 'Use our AI-powered identity and enrichment engine to reveal the person, account, and context behind each and every buying signal—all unified into a single, fully enriched user profile.',
        button: 'See the Person360 difference',
        image: 'person360.png'
      }
    },
    {
      headline: 'AI & Automation',
      content: {
        heading: 'Trigger automated outbound with signals. Personalize at scale with AI.',
        subheading: 'Double go-to-market team productivity with half the effort. Run personalized outbound at scale with our AI-powered copilot, get real-time alerts from high-intent prospects, and scale winning plays so every rep can perform like the 1%.',
        button: 'See AI & Automation',
        image: 'aiauto.png'
      }
    },
    {
      headline: 'Integration',
      content: {
        heading: 'Connect to 50+ native integrations',
        subheading: 'Choose from dozens of natively built and fully managed integrations. Uncover every buying signal without compromising on data quality or privacy.',
        button: 'See Integration',
        tools: true,
        sectools: true
      }
    }
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Effect to handle automatic slide transition
  useEffect(() => {
    if (isPaused) return; // Do nothing if paused

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length, isPaused]);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true); // Stop automatic transitions
  };

  return (
    <div className="w-full bg-gray-100 h-[750px]">
      {/* Headline List */}
      <div className="flex justify-start ml-32 gap-8 mb-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`text-xl font-semibold roboto underline underline-offset-8 transition-colors hover:text-violet-600 duration-500 ${
              currentIndex === index ? 'text-neutral-800' : 'text-violet-700'
            }`}
            onClick={() => handleClick(index)}
          >
            {slide.headline}
          </button>
        ))}
      </div>

      {/* Content */}
      <SlideContent content={slides[currentIndex].content} />
    </div>
  );
};

export default HeadlineCarousel;
