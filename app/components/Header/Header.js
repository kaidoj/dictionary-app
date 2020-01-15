import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import './scss/style.scss';

const Header = () => {
  let isOpen = false;
  return (
    <header>
      <Navbar light expand="md">
        <NavbarBrand href="/">Dictionary App</NavbarBrand>
        <Button
          className="d-block d-sm-none"
          onClick={() => {
            document.body.classList.remove('is-open');
            if (!isOpen) {
              document.body.classList.add('is-open');
            }
            isOpen = !isOpen;
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </Navbar>
    </header>
  );
};

export default Header;
