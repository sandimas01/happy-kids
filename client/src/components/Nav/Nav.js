import React from "react";
import "./Nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="nav-style" color="light" light expand="md">
          <NavbarBrand href="/" />

          <NavItem>
            <NavLink className="link-style" href="/">
              <img
                className="logo"
                src="../images/logo.png"
                alt="img"
                width="150px"
              />
            </NavLink>
          </NavItem>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                {/* // current code
             <DropdownToggle className="link-style" nav caret>
                Toys
               </DropdownToggle> */}

                {/* <NavItem>
               <NavLink className="link-style" href='/api/items'>Items</NavLink>
             </NavItem> */}
                <DropdownToggle href='/api/items' nav caret>
                 Items
                </DropdownToggle>

                <DropdownMenu right>
                <DropdownItem>
                     <NavLink href="/beads/">Beads</NavLink>
                  </DropdownItem>
                      <DropdownItem divider />
                  <DropdownItem>
                     <NavLink href="/bracelets/">Bracelets</NavLink>
                  </DropdownItem>
                      <DropdownItem divider />
                  <DropdownItem>
                     <NavLink href="/keychains">Keychains</NavLink>
                  </DropdownItem>
                      <DropdownItem divider />
                  <DropdownItem>
                     <NavLink href="/pacifierholders">Pacifier Holders</NavLink>
                  </DropdownItem>
                      <DropdownItem divider />
                  <DropdownItem>
                     <NavLink href="/rattlers">Rattlers</NavLink>
                  </DropdownItem>
                      <DropdownItem divider />
                  <DropdownItem>
                     <NavLink href="/teethers">Teethers</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* <NavItem>
               <NavLink className="link-style" href='/home'>About</NavLink>
             </NavItem> */}
              <NavItem>
                <NavLink  href="/about/">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="/contact/">
                  Contact
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle  nav caret>
                  Sign In
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sign In <NavLink href="/Login" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Register <NavLink href="/Register" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
