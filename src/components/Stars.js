import React      from 'react';
import FormGroup    from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col          from 'react-bootstrap/lib/Col';
import StarRatingComponent from 'react-star-rating-component';

// Generic Stars
export const
  Stars = (props) =>  {
    return (
      <span>
        <Col componentClass={ControlLabel} sm={props.labelSize}>
          {props.label}:
        </Col>
        <Col sm={props.panelSize}>
          <FormGroup controlId="formStarRating">
            <StarRatingComponent
              name="stars"
              renderStarIcon={() => <span><i className="fa fa-github"></i></span>}
              starCount={10}
              onStarClick={props.handleRatingClick} />
          </FormGroup>
        </Col>
      </span>
    );
  };

Stars.propTypes = {
  labelSize : React.PropTypes.number,
  panelSize : React.PropTypes.number
};

Stars.defaultProps = {
  labelSize : 4,
  panelSize : 8
};
