import React from 'react';
import classnames from 'classnames';

// Common loading gif
export const
  Loading = (props) =>  {

    return (
      <div className={props.myClass}>
        <i className={classnames('fa', 'fa-spinner', 'fa-spin', 'fa-4x', 'di-spinner')} aria-hidden="true"></i>
      </div>
    );
  };

Loading.propTypes    = { myClass: React.PropTypes.string };
Loading.defaultProps = { myClass: 'absolute-center' };
