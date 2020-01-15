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
import './scss/style.scss';
import { validateName } from './utils/validation';
import { addDictionary } from '../../Dictionaries/actions';
import { existsByKey } from '../../Dictionaries/utils/array';
import DictionaryModel from '../../Dictionaries/models/DictionaryModel';
import history from '../../../utils/history';

class Dictionary extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      add,
      dictionaries
    } = this.props;

    const name = e.target.name.value;
    if (!validateName(name)) {
      toastr.error('Error', 'Empty dictionary name field!');
      return false;
    }
    const dictionary = new DictionaryModel(name);
    if (existsByKey(dictionaries, dictionary, 'name')) {
      toastr.error('Error', 'Dictionary already exists with this name!');
      return false;
    }

    add(dictionary);
    e.target.reset();
    history.push(`/dictionary/${dictionary.uuid}`);

    return true;
  }

  render() {
    return (
      <form id="add-dictionary" onSubmit={this.handleSubmit}>
        <Input name="name" placeholder="Dictionary title" />
        <Button type="submit" color="primary" id="add-dictionary">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <UncontrolledTooltip placement="top" target="add-dictionary">
            Add new Dictionary
        </UncontrolledTooltip>
      </form>
    );
  }
}

Dictionary.propTypes = {
  add: PropType.func,
  dictionaries: PropType.array
};

const mapDispatchToProps = (dispatch) => ({
  add: (name) => dispatch(addDictionary(name))
});

const mapStateToProps = (state) => ({
  dictionaries: state.dictionaries.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictionary);
