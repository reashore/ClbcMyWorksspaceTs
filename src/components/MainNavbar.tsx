
import * as React from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';

const MainNavbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="http://communitylivingbc.ca">My Workspace</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/">Page 1</NavItem>
      <NavItem href="/page2">Page 2</NavItem>
      <NavItem href="/page3">Page 3</NavItem>
      <NavItem href="/createprogram">Create Program</NavItem>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <MenuItem href="/">Page 1</MenuItem>
        <MenuItem href="/page2">Page 2</MenuItem>
        <MenuItem href="/page3">Page 3</MenuItem>
        <MenuItem divider={true} />
        <MenuItem href="/createprogram">Create Program</MenuItem>
      </NavDropdown>
    </Nav>;
  </Navbar>
);

export default MainNavbar;

// class MainNavbar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.onSelect = this.onSelect.bind(this);
//   }

//   onSelect(selectedKey) {
//     console.log(`selected ${selectedKey}`);
//   }

//   render() {
//     return (
//       <Navbar>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <a href="http://communitylivingbc.ca">My Workspace</a>
//           </Navbar.Brand>
//         </Navbar.Header>
//         {/* <Nav onSelect={this.onSelect} > */}
//         <Nav>
//           <NavItem eventKey={1} href="/page1">Page 1</NavItem>
//           <NavItem eventKey={2} href="/page2">Page 2</NavItem>
//           <NavItem eventKey={3} href="/page3">Page 3</NavItem>
//           <NavItem eventKey={4} href="/">Create Program</NavItem>
//           <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
//             <MenuItem eventKey={5.1} href="/page1">Page 1</MenuItem>
//             <MenuItem eventKey={5.2} href="/page2">Page 2</MenuItem>
//             <MenuItem eventKey={5.3} href="/page3">Page 3</MenuItem>
//             <MenuItem divider />
//             <MenuItem eventKey={5.4} href="/">Create Program</MenuItem>
//           </NavDropdown>
//         </Nav>
//       </Navbar>
//     );
//   }
// }
