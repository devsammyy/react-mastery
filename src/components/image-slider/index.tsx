import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";

interface IProps {
  url: string;
  limit: number;
}

const ImageSlider: React.FC<IProps> = ({ url, limit }) => {
  const [images, setImages] = useState<[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchImages = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      console.log(loading);

      if (data) {
        setImages(data);
      }
      setLoading(false);
    } catch (e) {
      setError(JSON.stringify(e?.message) as string);
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <VscLoading size={100} className="animate-spin" />;
  }

  if (error !== null) {
    return <div>{`"Error, something went wrong " ${error}`}</div>;
  }

  return (
    <div className="relative flex w-150 h-100 justify-center items-center overflow-hidden ">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow-btn left-4"
      />
      {images && images.length
        ? images.map((item, idx) => (
            <img
              className={`border absolute rounded-lg shadow-lg shadow-neutral-500 transition-all duration-300 ease-in  w-full h-full ${currentSlide === idx ? "translate-x-0" : "-translate-x-full"}`}
              key={item.id}
              src={item.download_url}
              alt={item.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow-btn right-4"
      />
      <span className="flex absolute bottom-4">
        {images && images.length
          ? images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`${currentSlide === idx ? "bg-black!" : "bg-white!"}  w-2! h-8! rounded-[50%]! cursor-pointer border-0 outline-0 my-0 mx-[0.2rem]`}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
