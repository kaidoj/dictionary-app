import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip } from 'reactstrap';

const ReasonLabel = ({ item }) => (
  <span className="reason-label" id={`T-${item.uuid}`} style={{ backgroundColor: item.reason.color }}>
    {item.reason.name}
    <UncontrolledTooltip placement="top" target={`T-${item.uuid}`}>
      {item.reason.desc}
    </UncontrolledTooltip>
  </span>
);

ReasonLabel.propTypes = {
  item: PropTypes.object
};

export default ReasonLabel;
