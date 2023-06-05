import React, { useState, useEffect } from "react";

const Carousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    console.log(children.length)
    console.log(currentIndex)
    setLength(children.length); // 0, 1
  }, [children]);

  const next = () => {
    if (currentIndex === (children.length - 1)) return setCurrentIndex(0);

    setCurrentIndex((prevState) => prevState + 1);
  };

  const prev = () => {
    if (currentIndex === 0) return setCurrentIndex(children.length - 1);

    setCurrentIndex((prevState) => prevState - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button
          onClick={prev}
          className="absolute right-[calc(100%+1rem)] carousel-content-wrapper left-arrow"
        >
          <div
            className="pointer-events-none carousel-content"
            style={{ transform: `translateX(-${(currentIndex - 1 === 0 ? children.length - 1 : currentIndex - 1) * 100}%)` }}
          >
            {children}
          </div>
        </button>

        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-[calc(-100%-1rem)] carousel-content-wrapper right-arrow"
        >
          <div
            className="pointer-events-none carousel-content"
            style={{ transform: `translateX(-${(currentIndex + 1 === children.length ? 0 : currentIndex + 1) * 100}%)` }}
          >
            {children}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
