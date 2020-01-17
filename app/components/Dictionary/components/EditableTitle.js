import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { UncontrolledTooltip, Input } from 'reactstrap';
import { toastr } from 'react-redux-toastr';
import { existsByKey } from '../../Dictionaries/utils/array';

class EditableTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: props.item.name
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleEditClick(e) {
    e.preventDefault();
    const {
      item,
      update,
      dictionaries
    } = this.props;
    const {
      editing,
      value
    } = this.state;

    this.setState({
      editing: true
    });
    if (editing) {
      const newItem = { ...item };
      newItem.name = value;
      if (existsByKey(dictionaries, newItem, 'name')) {
        toastr.error('Error', 'Dictionary already exists with this name!');
      } else {
        update(newItem);
        this.setState({
          editing: false
        });
      }
    }
  }

  handleKeyPress(e) {
    const {
      value
    } = this.state;
    const {
      item,
      update,
      dictionaries
    } = this.props;
    if (e.which !== 13) {
      return false;
    }

    const newItem = { ...item };
    newItem.name = value;
    if (existsByKey(dictionaries, newItem, 'name')) {
      toastr.error('Error', 'Dictionary already exists with this name!');
    } else {
      update(newItem);
      this.setState({
        editing: false
      });
    }
    return true;
  }

  handleOnChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const {
      editing,
      value
    } = this.state;
    const {
      item
    } = this.props;

    return (
      <h2 className="editable-title">
        {editing ? <Input onChange={this.handleOnChange} onKeyPress={this.handleKeyPress} value={value} /> : item.name}
        <a href="#" onClick={this.handleEditClick} id="edit-dictionary"><FontAwesomeIcon icon={faPencilAlt} /></a>
        <UncontrolledTooltip placement="top" target="edit-dictionary">
            Edit dictionary title
        </UncontrolledTooltip>
      </h2>
    );
  }
}

EditableTitle.propTypes = {
  item: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  dictionaries: PropTypes.array.isRequired
};

export default EditableTitle;
