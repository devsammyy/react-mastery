import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numOfStars = 5 }: { numOfStars: number }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex justify-center">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={`${index <= (hover || rating) ? "text-[#fff700]" : "text-black"}`}
            size={40}
            onMouseMove={() => {
              setHover(index);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
            onClick={() => {
              setRating(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
