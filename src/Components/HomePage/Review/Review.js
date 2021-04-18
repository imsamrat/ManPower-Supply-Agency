import React, { useContext } from "react";
import { UserContext } from "../../../App";
import SingleReview from "../SingleReview/SingleReview";

const Review = () => {

  const { reviews, SetReviews } = useContext(UserContext);

  return (
    <section className='review' style={{ margin: "6rem 0" }}>
      <div className='container'>
        <h3
          className='text-center'
          style={{
            fontWeight: "700",
            fontSize: "36px",
            marginBottom: "3rem",
            color: "#171B4E",
          }}>
          Client <span style={{ color: "#7AB259" }}>Feedback</span>
        </h3>
        {
          reviews.length === 0 &&
                    <div className="spinner-border text-primary my-4 text-center align-items-center" role="status">
                     <span class="visually-hidden"></span>
                    </div>          
        }
        <div className='row justify-content-around'>
          {reviews && reviews.map(review => (
            <SingleReview key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;