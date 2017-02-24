import React        from 'react';
//import FormGroup    from 'react-bootstrap/lib/FormGroup';
import Carousel from 'react-bootstrap/lib/Carousel';

const getItem = (item, idx) => {
  return (
    (item.url) ?  <Carousel.Item key={idx}>
      <div className="carouselImg">
        <img width={900} height={500} alt="No image found!" src={item.url}/>
      </div>

    </Carousel.Item> : null
  );
};

// Favorites in a carousel
export const
  Favorites = (props) =>  {
    return (
      <Carousel>
        {props.items.map(getItem)}
      </Carousel>
    );
  };
