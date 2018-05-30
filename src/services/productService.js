const url = 'http://localhost:3000/products'

export function newProduct(product){

    let productDat = new FormData();

    for(let key in product){
        productDat.append(key, product[key]);
    }

  return fetch(url + '/new', {
      method:'post',
      body: productDat,
      credentials: "include"
  })
  .then(res=>{
      if(!res.ok) return Promise.reject(res);
      return res.json();
  })
  .then(product=>{
      //localStorage.setItem('user', JSON.stringify(user))
      return product;
  });
}

export function getProducts() {
    return fetch(url + '/')
    .then(r=>r.json())
    .then(products=>products)
  }