import React, { Component } from 'react'
import {

    Navbar,

    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
     } from 'reactstrap';
import Gambar from '../img/binus.png';
import '../App.css';


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
            <Navbar color="light" ligzht expand="md">
            <img src={Gambar} style={{width:70,height:60 }} />
            <br />
              <NavbarBrand className="header">SMK BINA NUSANTARA</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="NavLink-Header header-navbar" href="#">Visi & Misi</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header header-navbar" href="#">Jurusan</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header header-navbar" href="#">Berita Kampus</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header header-navbar" href="#">Fasilitas</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="NavLink-Header header-navbar" href="#">Dukungan</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
      }
}
