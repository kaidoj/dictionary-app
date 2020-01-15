import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import {
  Input,
  Button,
  UncontrolledTooltip
} from 'reactstrap';
import { toastr } from 'react-redux-toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { validateDomain, isEmpty, isMatch } from './utils/validation';
import './scss/style.scss';
import { addDomain } from '../../Dictionaries/actions/addDomain';
import DomainModel from '../../Dictionaries/models/DomainModel';


class Domain extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      add,
      dictionary
    } = this.props;

    const domain = e.target.domain.value;
    const range = e.target.range.value;

    if (isEmpty(domain) || isEmpty(range)) {
      toastr.error('Error', 'Domain or Range cannot be empty!');
      return false;
    }
    if (isMatch(domain, range)) {
      toastr.error('Error', 'Domain and Range cannot match!');
      return false;
    }

    const reason = validateDomain(dictionary, domain, range);
    const domainModel = new DomainModel(dictionary.uuid, domain, range, reason);
    add(dictionary, domainModel);
    e.target.reset();
    if (reason) {
      toastr.error('Error', 'Domain you insert was invalid!');
    }
    return true;
  }

  render() {
    return (
      <form id="add-domain" onSubmit={this.handleSubmit}>
        <span className="d-none d-sm-inline-block">Add domain</span>
        <Input name="domain" placeholder="Domain" />
        <Input name="range" placeholder="Range" />
        <Button type="submit" color="primary" id="add-domain-btn">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <UncontrolledTooltip placement="top" target="add-domain-btn">
            Add new Domain
        </UncontrolledTooltip>
      </form>
    );
  }
}

Domain.propTypes = {
  add: PropType.func,
  dictionary: PropType.object
};

const mapDispatchToProps = (dispatch) => ({
  add: (dictionary, domain, range, reason) => dispatch(addDomain(dictionary, domain, range, reason))
});

export default connect(
  null,
  mapDispatchToProps
)(Domain);
