import React, { Component } from 'react'
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
    DropdownItem } from 'reactstrap';
import Gambar from '../img/binus.png';



export default class Header extends Component {
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
            <Navbar color="white" ligzht expand="md">
            <img src={Gambar} style={{width:70,height:60 }} />
            <br />
              <NavbarBrand><u>SMK BINA NUSANTARA</u></NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="NavLink-Header" href="#">Visi & Misi</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header" href="#">Jurusan</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header" href="#">Berita Kampus</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header" href="#">Fasilitas</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header" href="#">Dukungan</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
      }
}
