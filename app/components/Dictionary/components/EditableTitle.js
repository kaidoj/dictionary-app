import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { UncontrolledTooltip, Input } from 'reactstrap';

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
      update
    } = this.props;
    const {
      editing,
      value
    } = this.state;

    if (editing) {
      item.name = value;
      update(item);
    }

    this.setState({
      editing: !editing
    });
  }

  handleKeyPress(e) {
    const {
      value
    } = this.state;
    const {
      item,
      update
    } = this.props;
    if (e.which !== 13) {
      return false;
    }

    item.name = value;
    update(item);

    this.setState({
      editing: false
    });

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
  update: PropTypes.func.isRequired
};

export default EditableTitle;
