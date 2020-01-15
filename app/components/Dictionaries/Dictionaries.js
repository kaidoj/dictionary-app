import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import history from '../../utils/history';
import AddForm from '../Form/Dictionary';
import './scss/style.scss';

class Dictionaries extends Component {
  componentDidMount() {
    const {
      match,
      dictionaries
    } = this.props;
    if (!match.params.id && dictionaries[0]) {
      history.push(`/dictionary/${dictionaries[0].uuid}`);
    }
  }

  render() {
    const {
      dictionaries,
      match
    } = this.props;

    return (
      <ListGroup>
        <ListGroupItem className="add-form-container" action>
          <AddForm />
        </ListGroupItem>
        {dictionaries.map((item) => (
          <ListGroupItem
            tag={Link}
            to={`/dictionary/${item.uuid}`}
            key={item.uuid}
            action
            active={match.params.id === item.uuid}
          >
            {item.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

Dictionaries.propTypes = {
  dictionaries: PropType.array,
  match: PropType.object
};

const mapStateToProps = (state) => ({
  dictionaries: state.dictionaries.items
});

export default withRouter(connect(
  mapStateToProps,
  null
)(Dictionaries));
