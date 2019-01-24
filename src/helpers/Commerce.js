import axios from 'axios';

const public_key = 'pk_156117d6e02958c3b35dadb6613ac2d477549ced0b35e';

export async function getStore () {
  return await axios({
    method: 'get',
    url: 'https://api.chec.io/v1/checkouts/commerce-js-basic?type=permalink',
    headers: {
      'X-Authorization': public_key,
    }
  });
};

export async function getProducts () {
  let res = await axios({
    method: 'get',
    url: 'https://api.chec.io/v1/products',
    headers: {
      'X-Authorization': public_key,
    }
  });

  return res.data;
}