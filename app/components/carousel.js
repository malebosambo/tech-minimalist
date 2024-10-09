import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Carousel() {

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    laptop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3
    },
    phone: {
      breakpoint: { max: 767, min: 0 },
      items: 2
    }
  };

  return (

    <Carousel responsive={responsive}>
      <div style={{ backgroundColor: "grey" }}>Item 1</div>
      <div style={{ backgroundColor: "blue" }}>Item 2</div>
      <div style={{ backgroundColor: "purple" }}>Item 3</div>
      <div style={{ backgroundColor: "seagreen" }}>Item 4</div>
      <div style={{ backgroundColor: "beige" }}>Item 5</div>
    </Carousel>
  );
}