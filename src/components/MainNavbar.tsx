
import * as React from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';

export const MainNavbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="http://communitylivingbc.ca">My Workspace</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/">Page 1</NavItem>
      <NavDropdown title="Menu1" id="menu1">
        <MenuItem href="/">Page 1</MenuItem>
        <MenuItem href="/page2">Page 2</MenuItem>
        <MenuItem href="/page3">Page 3</MenuItem>
        <MenuItem divider={true} />
        <MenuItem href="/createprogram">Create Program</MenuItem>
      </NavDropdown>
      <NavDropdown title="Menu2" id="menu2">
        <MenuItem href="/">Page 1</MenuItem>
        <MenuItem href="/page2">Page 2</MenuItem>
        <MenuItem href="/page3">Page 3</MenuItem>
        <MenuItem divider={true} />
        <MenuItem href="/createprogram">Create Program</MenuItem>
      </NavDropdown>
      <NavDropdown title="Menu3" id="menu3">
        <MenuItem href="/">Page 1</MenuItem>
        <MenuItem href="/page2">Page 2</MenuItem>
        <MenuItem href="/page3">Page 3</MenuItem>
        <MenuItem divider={true} />
        <MenuItem href="/createprogram">Create Program</MenuItem>
      </NavDropdown>
      <NavDropdown title="Menu3" id="menu4">
        <MenuItem href="/">Page 1</MenuItem>
        <MenuItem href="/page2">Page 2</MenuItem>
        <MenuItem href="/page3">Page 3</MenuItem>
        <MenuItem divider={true} />
        <MenuItem href="/createprogram">Create Program</MenuItem>
      </NavDropdown>
    </Nav>;
  </Navbar>
);

// import {  Redirect } from 'react-router-dom';

// export class MainNavbar extends React.Component<{}, {}> {
//   constructor(props: {}) {
//     super(props);

//     this.onSelect = this.onSelect.bind(this);
//   }

//   onSelect(selectedKey: any): void {
//     // tslint:disable-next-line:no-console
//     console.log(`selected ${selectedKey}`);
//     dispatchNavbarSelection(selectedKey);
//   }

//   render() {
//     return (
//       <Navbar>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <a href="http://communitylivingbc.ca">My Workspace</a>
//           </Navbar.Brand>
//         </Navbar.Header>
//         <Nav onSelect={this.onSelect}>
//           <NavItem eventKey={1} href="/page1">Page 1</NavItem>
//           <NavItem eventKey={2} href="/page2">Page 2</NavItem>
//           <NavItem eventKey={3} href="/page3">Page 3</NavItem>
//           <NavItem eventKey={4} href="/">Create Program</NavItem>
//           <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
//             <MenuItem eventKey={5.1} href="/page1">Page 1</MenuItem>
//             <MenuItem eventKey={5.2} href="/page2">Page 2</MenuItem>
//             <MenuItem eventKey={5.3} href="/page3">Page 3</MenuItem>
//             <MenuItem divider={true} />
//             <MenuItem eventKey={5.4} href="/">Create Program</MenuItem>
//           </NavDropdown>
//         </Nav>
//       </Navbar>
//     );
//   }
// }

// function dispatchNavbarSelection(selection: string) {
//   switch (selection) {
//     case '1':
//       return <Redirect to="/page1" push={true} />;
//       // todo: How to navigate to selected page?

//       case '2':
//       return <Redirect to="/page2" push={true} />;

//       case '3':
//       return <Redirect to="/page3" push={true} />;

//     default:
//     return <Redirect to="/" push={true} />;
//   }
// }
