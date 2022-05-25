/* eslint-disable no-console */
import axios from 'axios';

export function GET(url, header) {
  return axios
    .get(url, header)
    .then(res => res)
    .catch(err => {
      if (typeof err.response === 'undefined') {
        console.log('Network Error, Connection Not Found');
        return { status: 400 };
      }
      const errorData = err.response.data || {
        message: 'Something Went Wrong',
        trace: '',
      };
      console.log(`Error ${err.response.status || ''}:${errorData.message} ${errorData.trace}`);
      return err.response;
    });
}

export function GETFILE(url) {
  return axios
    .get(url, {
      responseType: 'blob',
      // timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: '*/*',
      },
    })
    .then(res => res)
    .catch(err => {
      if (typeof err.response === 'undefined') {
        console.log('Network Error, Connection Not Found');
        return { status: 400 };
      }
      const errorData = err.response.data || {
        message: 'Something Went Wrong',
        trace: '',
      };
      console.log(`Error ${err.response.status || ''}:${errorData.message} ${errorData.trace}`);
      return err.response;
    });
}

export function POST(url, body, header) {
  return axios
    .post(url, body, header)
    .then(res => res)
    .catch(err => {
      if (typeof err.response === 'undefined') {
        console.log('Network Error, Connection Not Found');
        return { status: 400 };
      }
      const errorData = err.response.data || {
        message: 'Something Went Wrong',
        trace: '',
      };
      console.log(`Error ${err.response.status || ''}:${errorData.message} ${errorData.trace}`);
      return err.response;
    });
}

export function PUT(url, body, header) {
  return axios
    .put(url, body, header)
    .then(res => res)
    .catch(err => {
      if (typeof err.response === 'undefined') {
        console.log('Network Error, Connection Not Found');
        return { status: 400 };
      }
      const errorData = err.response.data || {
        message: 'Something Went Wrong',
        trace: '',
      };
      console.log(`Error ${err.response.status || ''}:${errorData.message} ${errorData.trace}`);
      return err.response;
    });
}

export function DELETE(url, header) {
  return axios
    .delete(url, header)
    .then(res => res)
    .catch(err => {
      if (typeof err.response === 'undefined') {
        console.log('Network Error, Connection Not Found');
        return { status: 400 };
      }
      const errorData = err.response.data || {
        message: 'Something Went Wrong',
        trace: '',
      };
      console.log(`Error ${err.response.status || ''}:${errorData.message} ${errorData.trace}`);
      return err.response;
    });
}

// Get Unique Colors from Json Data
export const getCartTotal = cartItems => {
  let total = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cartItems.length; i++) {
    total += parseInt(cartItems[i].qty, 10) * parseInt((cartItems[i].price * cartItems[i].discount) / 100, 10);
  }
  return total;
};

// Get TOP Collection
export const getTopCollection = products => {
  const items = products.filter(product => product.rating > 4);
  return items.slice(0, 8);
};

// Get Best Seller
export const getBestSeller = products => {
  const items = products.filter(product => product.sale === true);

  return items.slice(0, 8);
};

// Get Mens Wear
export const getMensWear = products => {
  const items = products.filter(product => product.category === 'men');

  return items.slice(0, 8);
};

// Get Single Product
export const getSingleItem = (products, id) => {
  const items = products.find(element => element.id === id);
  return items;
};
