import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import './Jumbo.css'

export default class Jumbo extends Component {
  render() {
    return (
      <div>
       <Jumbotron style={{backgroundColor:'white'}}>
        <h1 className="jumbotron-h1">SMK Bina Nusantara Semarang A Revolutionary That Invests in You</h1>
        <p className="jumbotron-p">Smk Bina Nusantara Semarang adalah sekolah Berbasis industri dengan penerapan kurikulum dan pembelajaran yang disiapkan untuk mengisi pasar kerja.</p>
        <button className="jumbotron-button">Selengkapnya</button>
      </Jumbotron> 
      </div>
    )
  }
}
