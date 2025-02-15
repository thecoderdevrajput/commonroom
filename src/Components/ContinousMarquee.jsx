import Marquee from "react-fast-marquee";



const ContinousMarquee = () => (
    <>
    <div className="bg-gray-100 h-2/3 sticky">
    <Marquee speed={15} >
    <div className="h-7 flex mt-32 ">
      <img src="activities-1.png" />
      <img src="activities-2.png" />
      <img src="activities-3.png" />
      <img src="activities-4.png" />
      </div>
    </Marquee>

    <Marquee speed={20} direction="right">
        <div className="h-7 flex">
      <img src="activities-1.png" />
      <img src="activities-2.png" />
      <img src="activities-3.png" />
      <img src="activities-4.png" />
      </div>
    </Marquee>

    <Marquee speed={10}>
        <div className="h-7 flex">
      <img src="activities-1.png" />
      <img src="activities-2.png" />
      <img src="activities-3.png" />
      <img src="activities-4.png" />
      </div>
    </Marquee>

    <Marquee speed={35} direction="right" >
        <div className="h-7 flex">
      <img src="activities-1.png" />
      <img src="activities-2.png" />
      <img src="activities-3.png" />
      <img src="activities-4.png" />
      </div>
    </Marquee>

    <Marquee speed={25}>
    <div className="h-7 flex mb-32">
      <img src="activities-1.png" />
      <img src="activities-2.png" />
      <img src="activities-3.png" />
      <img src="activities-4.png" />
      </div>
    </Marquee>



    </div>
    </>


  );
  
  export default ContinousMarquee;