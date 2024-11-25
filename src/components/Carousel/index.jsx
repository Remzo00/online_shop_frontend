import{ useState, useEffect } from 'react';
import { CarouselContainer, CarouselWrapper, Slide, CarouselButton } from './index.styled';
import slika1 from '../../assets/tech.webp'
import slika2 from '../../assets/ring.webp'
import slika3 from '../../assets/decor.avif'

const carouselImages = [
    slika1,
    slika2,
    slika3,
  ];
export default function Carousel(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselImages.length) % carouselImages.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <CarouselContainer>
        <CarouselWrapper>
          {carouselImages.map((image, index) => (
            <Slide key={index} active={index === currentSlide}>
              <img src={image} alt={`Slika ${index + 1}`} />
            </Slide>
          ))}
        </CarouselWrapper>
        <CarouselButton onClick={prevSlide}>◀</CarouselButton>
        <CarouselButton onClick={nextSlide}>▶</CarouselButton>
      </CarouselContainer>
    );
}