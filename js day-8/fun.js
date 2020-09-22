let products = [
  {
    id: 1,
    name: "Realme 7 pro",
    size: "6.4 inch",
    color: "white",
    price: 20000,
    image: "product1.jpeg",
    description: "quality product",
  },
  {
    id: 2,
    name: "Samsung galaxy M31s",
    size: "6.5 inch",
    color: "Black",
    price: 22000,
    image: "product2.jpeg",
    description: "beast",
  },

  {
    id: 3,
    name: "OPPO F17 pro",
    size: "6.4 inch",
    color: "White & Black",
    price: 22000,
    image: "product3.png",
    description: "hd pics",
  },

  {
    id: 4,
    name: "realme 6i",
    size: "6.5",
    color: "Black",
    price: 14000,
    image: "product4.jpeg",
    description: "good smartphone",
  },

  {
    id: 5,
    name: "vivo y32",
    size: "6 inch",
    color: "Blue",
    price: 13000,
    image: "product5.jpeg",
    description: "simple phone",
  },

  {
    id: 6,
    name: "Apple iPhone 11 ",
    size: "6.1 inch",
    color: "white",
    price: 64000,
    image: "product6.jpg",
    description: "privacy is key",
  },
  {
      id: 7,
      name: "Iphone",
      size: "6inch",
      color: "Silver",
      price: 31000,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },{
      id: 8,
      name: "Asus",
      size: "7inch",
      color: "black",
      price: 18000,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },{
      id: 9,
      name: "Samsung",
      size: "7 inch",
      color: "White",
      price: 17000,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },{
      id: 10,
      name: "Lava",
      size: "5.5 inch",
      color: "Grey",
      price: 10000,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },{
      id: 11,
      name: "Realme",
      size: "7.5 inch",
      color: "White",
      price: 14000,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },{
      id: 12,
      name: "Oneplus",
      size: "7inch",
      color: "Silver",
      price: 15000,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },
];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description ;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  function searchPrice(searchValue) {
    let searchedPrices = products.filter(function (product, index) {
      let searchStrinm =
      product.name + " " +product.price;
  
      return searchStrinm.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedPrices);
  }
  // 
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
    if(id==pro.id){
        console.log("Same");
    }
    //   putting in cart
    cart.push(pro);
    
    displayProducts(cart, "cart");
  }
  //
  function totalcount(id){
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }