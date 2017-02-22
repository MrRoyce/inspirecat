import React        from 'react';

import FormControl  from 'react-bootstrap/lib/FormControl';
import Col          from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
//import classnames   from 'classnames';

// Stats
export const
  Stats = (props) =>  {

    return (
      <div>
        <Col componentClass={ControlLabel} xs={props.labelSize}>
          Gets:
            <FormControl readOnly type="text" value={props.gets} />
        </Col>
        <Col componentClass={ControlLabel} xs={props.labelSize}>
          Votes:
            <FormControl readOnly type="text" value={props.votes} />
        </Col>
        <Col componentClass={ControlLabel} xs={props.labelSize}>
          Favs:
            <FormControl readOnly type="text" value={props.favs} />
        </Col>
      </div>
    );
  };

  Stats.propTypes = {
    labelSize : React.PropTypes.number
  };

  Stats.defaultProps = {
    labelSize : 4
  };
