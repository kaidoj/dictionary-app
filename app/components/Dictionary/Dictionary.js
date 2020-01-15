import React, { Component } from 'react';
import PropType from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import {
  Button,
  UncontrolledTooltip
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import history from '../../utils/history';
import './scss/style.scss';
import { removeDictionary } from '../Dictionaries/actions';
import Domain from '../Form/Domain/Domain';
import Domains from '../Domains';
import EditableTitle from './components/EditableTitle';
import { udpateDictionary } from '../Dictionaries/actions/update';
import { getByUUID } from '../Dictionaries/utils/array';


class Dictionary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: getByUUID(props.dictionaries, props.match.params.id)
    };

    this.deleteDictionaryClick = this.deleteDictionaryClick.bind(this);
  }

  componentDidMount() {
    const {
      match,
      dictionaries
    } = this.props;

    this.setState({
      item: getByUUID(dictionaries, match.params.id)
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      item
    } = this.state;
    const {
      dictionaries
    } = this.props;
    if ((item && nextProps.match.params.id !== item.uuid) || !item) {
      this.setState({
        item: getByUUID(nextProps.dictionaries, nextProps.match.params.id)
      });
    }

    if (nextProps.dictionaries !== dictionaries) {
      this.setState({
        item: getByUUID(nextProps.dictionaries, nextProps.match.params.id)
      });
    }
  }

  doDelete() {
    const {
      remove,
      dictionaries
    } = this.props;

    const {
      item
    } = this.state;

    remove(item);
    toastr.success('Success', 'Successfully deleted');
    if (dictionaries[0]) {
      history.push(`/dictionary/${dictionaries[0].uuid}`);
    } else {
      history.push('/no-dictionaries');
    }
  }

  deleteDictionaryClick() {
    const confirmOptions = {
      onOk: () => this.doDelete()
    };
    toastr.confirm('Are you sure you would like to delete this dictionary?', confirmOptions);
  }

  render() {
    const {
      dictionaries,
      update
    } = this.props;
    const {
      item
    } = this.state;

    if (!item) {
      return <div>No dictionaries found!</div>;
    }

    return (
      <section id="dictionary">
        <header>
          <EditableTitle item={item} update={update} />
          <Button color="danger" size="sm" id="delete-dictionary" onClick={this.deleteDictionaryClick}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <UncontrolledTooltip placement="top" target="delete-dictionary">
            Delete whole dictionary
          </UncontrolledTooltip>
        </header>
        <Domain dictionaries={dictionaries} dictionary={item} />
        <Domains dictionaries={dictionaries} dictionary={item} />
      </section>
    );
  }
}

Dictionary.propTypes = {
  match: PropType.object,
  remove: PropType.func,
  update: PropType.func,
  dictionaries: PropType.array
};

const mapDispatchToProps = (dispatch) => ({
  remove: (dictionary) => dispatch(removeDictionary(dictionary)),
  update: (dictionary) => dispatch(udpateDictionary(dictionary))
});

const mapStateToProps = (state) => ({
  dictionaries: state.dictionaries.items
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictionary));
