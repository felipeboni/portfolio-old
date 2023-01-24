import React from "react";

export class CustomControls extends React.Component {
    static defaultProps = {};
  
    renderSlidesNumbers(currentSlideIndex) {
      const { slidesCount, scrollToSlide } = this.props;
      const slidesNumbers = [];

      for (let i = 0; i < slidesCount; i++) {
        
        const buttonProps = {
          disabled: currentSlideIndex === i,
          key: i,
          onClick: () => scrollToSlide(i),
        };

        const invertSlides = [2];

        console.log(currentSlideIndex)
        console.log(invertSlides.includes(currentSlideIndex))

        if (invertSlides.includes(currentSlideIndex)) {
          slidesNumbers.push(<button type="button" className="after:transition-all after:scale-50 after:rotate-45 disabled:after:rotate-0 disabled:after:scale-100 after:inline-block after:w-4 after:h-4 after:bg-secondary disabled:after:border-2 disabled:after:border-secondary disabled:after:bg-transparent" {...buttonProps}></button>);
        } else {
          slidesNumbers.push(<button type="button" className="after:transition-all after:scale-50 after:rotate-45 disabled:after:rotate-0 disabled:after:scale-100 after:inline-block after:w-4 after:h-4 after:bg-primary-500 disabled:after:border-2 disabled:after:border-primary-500 disabled:after:bg-transparent" {...buttonProps}></button>);
        }
        
      }
      return slidesNumbers;
    }
  
    render() {
      const {
        getCurrentSlideIndex, slidesCount, style, className,
      } = this.props;
      const currentSlideIndex = getCurrentSlideIndex();
  
      return (
        <div className={className}>
          {this.renderSlidesNumbers(currentSlideIndex)}
        </div>
      );
    }
}