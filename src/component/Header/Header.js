import React, { Component } from 'react'
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import Gambar from './binus.png'

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
            <Navbar className="header" color="white" light expand="md">
            <img src={Gambar} style={{width:70,height:60 }} />
              <NavbarBrand className="binus"><u>SMK BINA NUSANTARA</u></NavbarBrand>
              <NavbarBrand className="cerdas">Cerdas Santun dan Berbudiluhur</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar className="header-navbar">
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>Beranda</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Visi & Misi</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Jurusan</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Berita Kampus</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Fasilitas</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Dukungan</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}
