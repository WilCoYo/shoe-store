import React, {useEffect, useRef} from 'react'

import './Reviews.css'



function Reviews() {


    const reviewsArray = [
        {
            title: 'ECO-FRIENDLY AND DURABLE',
            review: "I'm a review. Click to edit me and add text thats says something nice about you and your work. Share a bit of critical acclaim and spur some excitement for your latest project",
            name: 'NAME'
        },
        {
            title: 'PERFECT FOR URBAN RUNNERS',
            review: "I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.",
            name: 'NAME'
        },
        {
            title: 'ECO-FRIENDLY AND DURABLE',
            review: "I'm a review. Click to edit me and add text thats says something nice about you and your work. Share a bit of critical acclaim and spur some excitement for your latest project",
            name: 'NAME'
        },
        {
            title: 'PERFECT FOR URBAN RUNNERS',
            review: "I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.",
            name: 'NAME'
        }
    ]
    

    // horizontal scrolling //
    
    const reviewContainerRef = useRef(null);

    useEffect(() => {
      const reviewContainer = reviewContainerRef.current;
      if (!reviewContainer) return;
  
      const handleScroll = (event) => {
        event.preventDefault();
        reviewContainer.scrollLeft += event.deltaY;
      };
  
      reviewContainer.addEventListener("wheel", handleScroll);
  
      return () => {
        reviewContainer.removeEventListener("wheel", handleScroll);
      };
    }, []);



  return (
    <div className='reviews-section'>
      <h3>Customer Reviews</h3>
      <div ref={reviewContainerRef} className='review-array-container'>
          <div className='reviews-list'>
              {reviewsArray.map((review) => (
                  <div className='review-content'>
                      <h4>{review.title}</h4>
                      <p>{review.review}</p>
                      <p>{review.name}</p>
                  </div>
                  ))}
          </div>
      </div>
    </div>
  )
}

export default Reviews