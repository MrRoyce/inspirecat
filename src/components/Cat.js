import React      from 'react';
import Image                  from 'react-bootstrap/lib/Image';
import classnames             from 'classnames';

// Cat Picture with link to source
export const
  Cat = (props) =>  {
    return (
        <a href={props.source_url} target="_blank">
          <Image className={classnames('img-responsive', 'panel-img', 'cat-img')} rounded src={props.url} alt={props.id} />
        </a>
    );
  };
