// deklarasi data product
let products = [
    {
      name: "Gaming Mouse",
      price: 100000,
      id: 1,
    },
    {
      name: "Gaming Keyboard",
      price: 150000,
      id: 2,
    },
    {
      name: "Gaming Headphone",
      price: 225000,
      id: 3,
    },
    {
      name: "Notebook",
      price: 4750000,
      id: 4,
    },
    {
      name: "UPS",
      price: 3200000,
      id: 5,
    }
  ];
  
// menampung data Cart
let cart = [];
  

// fungsi push product data to Cart
function addCart(id) {
  let result = products.find(element => element.id === id);
  cart.push(result); // Push ke array
  alert("added to cart !");
  
  localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
}

  // generate data untuk ditampilkan di product page
  function generateData() {
    let result = '';
  
    for (let i = 0; i<products.length; i++) {
      result += `<div class="col-md-6 card">
                    <div class="card-body">
                      <div class="row col-md-12">
                        <div class="col-md-8">
                          ${products[i].name} - IDR ${products[i].price}
                        </div>
                        <div class="col-md-4">
                          <button type="submit" onclick="addCart(${products[i].id})" class="btn btn-secondary">Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>`;
    }
  
    document.getElementById('content').innerHTML = result;
  
    return result;
  }
  
//parsing data localStorage
let ls = JSON.parse(localStorage.getItem('productsInCart')); 


//mengambil data localStorage yang ditampilkan pada page cart
  function getContent() {
    let result = '';
  
    for (let i = 0; i < ls.length; i++) {
        result += `<div class="col-md-6 card">
        <div class="card-body">
          <div class="row col-md-12">
            <div class="col-md-8">
              ${ls[i].name} - IDR ${ls[i].price}
            </div>
            <div class="col-md-4">
              <button type="submit" onclick="remove(${i})" class="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>`;
    }
  
    document.getElementById('content').innerHTML = result;
    return result;
}

//hapus item pada cart
function remove(id) {
  
  ls.splice(id, 1);
  alert("removed from cart !")
  localStorage.setItem('productsInCart', JSON.stringify(ls));

  getContent();
}