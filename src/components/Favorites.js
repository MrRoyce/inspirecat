import React        from 'react';
//import FormGroup    from 'react-bootstrap/lib/FormGroup';
import Carousel from 'react-bootstrap/lib/Carousel';

const getItem = (item, idx) => {
  return (
    <Carousel.Item key={idx}>
      <img width={900} height={500} alt="900x500" src={item.url}/>
    </Carousel.Item>
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
