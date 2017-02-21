import React        from 'react';
//import FormGroup    from 'react-bootstrap/lib/FormGroup';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col          from 'react-bootstrap/lib/Col';

const getOption = (option) => {
  return (<option value={option.id} key={option.id}>{option.name}</option>);
};

// Generic Select
export const
  Select = (props) =>  {
    return (
      <span>
        <Col componentClass={ControlLabel} sm={props.labelSize}>
          {props.label}:
        </Col>
        <Col sm={props.panelSize}>

            <FormControl componentClass="select" placeholder="Category...">
              <option value="0">All</option>
              {props.options.map(getOption)}
            </FormControl>

        </Col>
      </span>
    );
  };

Select.propTypes = {
  options   : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  labelSize : React.PropTypes.number,
  panelSize : React.PropTypes.number
};

Select.defaultProps = {
  labelSize : 4,
  panelSize : 8
};
