const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
const sliderPrice = document.querySelectorAll(".sliderPrice")
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
  let chosenProduct

  const currentProductImg = document.querySelector(".productImg")
  const currentProductTitle = document.querySelector(".productTitle")
  const currentProductPrice = document.querySelector(".productPrice")
  const currentProductColors = document.querySelectorAll(".color")
  const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        // change the chosen product
        chosenProduct = products[index]

        // change the current slide
        wrapper.style.transform = `translateX(-${index}00vw)`
        
        sliderPrice.forEach((price, index)=>{
            price.textContent = "$"+chosenProduct.price
        })
        

        // chnging the img of the chosen product
        currentProductImg.src = chosenProduct.colors[0].img
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$"+chosenProduct.price

        // assign new color 
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    })
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
        // for setting toggling the color
        currentProductColors.forEach((color)=>{
        color.style.boxShadow = "none";
            color.style.border="none"
        })
        color.style.boxShadow= "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        color.style.border="1.5px solid #3AB0FF"
    })
})

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{

        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"    
        })

        size.style.backgroundColor="black"
        size.style.color="white"
    })
})


const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display="none"
})
