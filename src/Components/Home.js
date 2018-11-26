import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Home extends Component {

  componentDidMount() {
    axios.get('http://lauraecommercebackend.lndo.site/api/products?_format=json')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

export default Home;
