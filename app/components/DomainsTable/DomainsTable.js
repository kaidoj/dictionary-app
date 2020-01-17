import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, Button, UncontrolledTooltip
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import './scss/style.scss';
import ReasonLabel from './components/ReasonLabel';

const DomainsTable = ({ domains, invalids, onDelete }) => (
  <Table className="domains-table" striped responsive>
    <thead>
      <tr>
        <th>Domain</th>
        <th>Range</th>
        {invalids ? <th>Invalid reason</th> : null}
        <th></th>
      </tr>
    </thead>
    <tbody>
      {domains.map((item) => (
        <tr key={item.uuid}>
          <td>{item.domain}</td>
          <td>{item.range}</td>
          {invalids ? <td><ReasonLabel item={item} /></td> : null}
          <td style={{ textAlign: 'right' }}>
            <Button onClick={() => onDelete(item)} color="danger" size="sm" id={`delete-domain-btn-${item.uuid}`}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <UncontrolledTooltip placement="top" target={`delete-domain-btn-${item.uuid}`}>
              Delete domain
            </UncontrolledTooltip>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

DomainsTable.propTypes = {
  domains: PropTypes.array.isRequired,
  invalids: PropTypes.bool,
  onDelete: PropTypes.func.isRequired
};

export default DomainsTable;
