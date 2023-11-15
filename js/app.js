/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var shop = [
    {
      title: 'Shirly',
      image: './img/yorkie14_1.jpg',
      price: '$75.00 Fee',
      description:"Energetic, Loves attention and playful with other people"
    },
    {
      title: 'Tweety',
      image: './img/Parrot.jpg',
      price: '$35.00 Fee',
      description: "Talkative, Loves to fly and friendly towards other people"
    } , {
      title: 'Tom',
      image: './img/Cat.jpg',
      price: '$25.00 Fee',
      description: "Very Loving, Loves to play and Likes to cuddle"
    }, {
      title: 'Jerry',
      image: './img/mouse.jpg',
      price: '$15.00 Fee',
      description: " Trickster, Friendly and loves toys "
    }, {
      title: 'Courage',
      image: './img/R.jpg',
      price: '$35.00 Fee',
      description: "Caring, Has Courage and Bravey"
    }, {
      title: 'Beethoven',
      image: './img/what-type-of-dog-is-beethoven-type.jpg',
      price: '$100.00 Fee',
      description: "Loyal, Cuddler and Playful"
    }, {
      title: 'Speckles',
      image: './img/guineaPig.jpg',
      price: '$18.00 Fee',
      description: "Smart, Brave and Quick"
    }



    ]

    var postHTML = " "




  //   for (var i=0; i < 7; i++){
  //     var heading = '<div class="product  ' + '"><span><h5 class="fw-bolder row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">' + shop[i].title + '</h5>'
  //     var image = '<img src="' + shop[i].image + '" class="shop-img  container px-4 px-lg-5 mt-5 row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"/>'
  //     var price = '<p class="container px-4 px-lg-5 mt-5 row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> $' + shop[i].price + '</p></span>'
  //     var description = '<div class="card-body p-4"><p class="container px-4 px-lg-5 mt-5 row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
  //     var concatThis = heading + image + price + description;
  //     postHTML = postHTML + concatThis
  // }
  // document.getElementById('market').innerHTML = postHTML




    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product card col-md-3 mx-3 my-3' + '"><span><h5 class="card-title titlename ">' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '" class="shop-img card-img justify-content-center"/>'
        var price = '<p class="container card-body price "> ' + shop[i].price + '</p></span>'
        var description = '<div class="cardDescription"><p class="card-text text " >'+ shop[i].description + '</p><button type="button" class="btn btn-warning button "> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML