import axios from 'axios';

export function getAllProducts () {
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

