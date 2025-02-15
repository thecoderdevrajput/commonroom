/* eslint-disable react/prop-types */
// Import necessary libraries
import  { useState, useEffect } from 'react';

// A reusable component for displaying content
const SlideContent = ({ content }) => {
  return (
    <div className="text-lg text-gray-600">
      {content.heading && <h3 className="text-2xl font-semibold mb-2">{content.heading}</h3>}
      {content.subheading && <h4 className="text-xl font-medium mb-4">{content.subheading}</h4>}
      {content.image && (
        <img src={content.image} alt="Slide content" className="mx-auto w-1/2 h-auto mb-4" />
      )}
      {content.video && (
        <video controls className="mx-auto w-1/2 h-auto">
          <source src={content.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const HeadlineCarousel = () => {
  // Define headlines and contents
  const slides = [
    {
      headline: 'Headline 1',
      content: {
        heading: 'Main Heading for Slide 1',
        subheading: 'Subheading for Slide 1',
        image: 'https://via.placeholder.com/400',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4'
      }
    },
    {
      headline: 'Headline 2',
      content: {
        heading: 'Main Heading for Slide 2',
        subheading: 'Subheading for Slide 2',
        image: 'https://via.placeholder.com/400',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4'
      }
    },
    {
      headline: 'Headline 3',
      content: {
        heading: 'Main Heading for Slide 3',
        subheading: 'Subheading for Slide 3',
        image: 'https://via.placeholder.com/400',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4'
      }
    },
    {
      headline: 'Headline 4',
      content: {
        heading: 'Main Heading for Slide 4',
        subheading: 'Subheading for Slide 4',
        image: 'https://via.placeholder.com/400',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4'
      }
    },
    {
      headline: (
        <img
          src="https://loading.io/mod/spinner/dots/sample.gif"
          alt="Circular Progress"
          className="w-8 h-8 inline-block"
        />
      ),
      content: {} // No content for this slide
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
    <div className="w-full bg-gray-100 p-6 text-center">
      {/* Headline List */}
      <div className="flex justify-around mb-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`text-xl font-bold underline transition-colors duration-500 ${
              currentIndex === index ? 'text-blue-500' : 'text-gray-800'
            }`}
            onClick={() => handleClick(index)}
          >
            {slide.headline}
          </button>
        ))}
      </div>

      {/* Content */}
      {slides[currentIndex].content && <SlideContent content={slides[currentIndex].content} />}
    </div>
  );
};

export default HeadlineCarousel;
