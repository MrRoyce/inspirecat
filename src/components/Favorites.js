import React        from 'react';
//import FormGroup    from 'react-bootstrap/lib/FormGroup';
import Carousel from 'react-bootstrap/lib/Carousel';

/* <Carousel.Caption>
  <p className="di-light">(Click to remove)</p>
</Carousel.Caption> */

const getItem = (item, idx) => {
  return (
    (item.url) ?  <Carousel.Item key={idx}>
      <div className="carouselImg">
        <img alt="Oops nothing found!" src={item.url}/>
      </div>

    </Carousel.Item> : null
  );
};

// Favorites in a carousel
export const
  Favorites = (props) =>  {
    return (
      <Carousel
        pauseOnHover
        onSelect={props.onSelect}
        >
        {props.items.map(getItem)}
      </Carousel>
    );
  };
