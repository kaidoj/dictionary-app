import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Badge
} from 'reactstrap';
import { toastr } from 'react-redux-toastr';
import DomainsTable from '../DomainsTable';
import Loading from '../Loading';
import { removeDomain } from '../Dictionaries/actions/removeDomain';

class Domains extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      dictionary: props.dictionary
    };

    this.toggle = this.toggle.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.deleteDomainClick = this.deleteDomainClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      dictionary
    } = this.state;

    if (nextProps.dictionary !== dictionary) {
      this.setState({
        dictionary: nextProps.dictionary
      });
    }
  }

  toggle(tab) {
    this.setState({
      activeTab: tab
    });
  }

  doDelete(item) {
    const {
      remove
    } = this.props;
    remove(item);
    toastr.success('Success', 'Domain successfully deleted');
  }

  deleteDomainClick(item) {
    const confirmOptions = {
      onOk: () => this.doDelete(item)
    };
    toastr.confirm('Are you sure you would like to delete this domain?', confirmOptions);
  }

  render() {
    const {
      dictionary,
      activeTab
    } = this.state;

    if (!dictionary) {
      return <Loading />;
    }

    const { valids } = dictionary.domains;
    const { invalids } = dictionary.domains;

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Valids {valids.length > 0 ? <Badge color="light">{valids.length}</Badge> : ''}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Invalids {invalids.length > 0 ? <Badge color="danger">{invalids.length}</Badge> : ''}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <DomainsTable
              domains={valids}
              onDelete={this.deleteDomainClick}
            />
          </TabPane>
          <TabPane tabId="2">
            <DomainsTable
              domains={invalids}
              onDelete={this.deleteDomainClick}
              invalids
            />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

Domains.propTypes = {
  remove: PropType.func,
  dictionary: PropType.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  remove: (domain) => dispatch(removeDomain(domain))
});

export default connect(
  null,
  mapDispatchToProps
)(Domains);
