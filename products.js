const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let frutas = []
let bebidas = []
let higiene = []

function separateProducts(lista){

  for (let i = 0; i < lista.length; i++){
   if(lista[i].category == "Frutas"){
    frutas.push(lista[i])    
   }if(lista[i].category == "Bebidas"){
    bebidas.push(lista[i])
   }if(lista[i].category == "Higiene"){
    higiene.push(lista[i])
   }
  }
  return
}
separateProducts(products)

const ulUm = document.querySelector(".ul-um")
const ulDois = document.querySelector(".ul-dois")
const ulTres = document.querySelector(".ul-tres")

function listarProdutos(list, ref){
  for (let i = 0; i<list.length; i++){
    let produto = list[i]
    let montarTemp = criarLi(produto)
    ref.appendChild(montarTemp)
  }
}
listarProdutos(frutas, ulUm)
listarProdutos(bebidas, ulDois)
listarProdutos(higiene, ulTres)



//criando li
function criarLi(lista){
  let imagem = lista.image
  let nome   = lista.title
  let cat    = lista.category
  let preco  = lista.price

  let elementoLi = document.createElement("li")
  let imgLi      = document.createElement("img")
  let mainLi     = document.createElement("main")
  let titleLi    = document.createElement("h1")
  let catLi      = document.createElement("h5")
  let precoLi    = document.createElement("strong")
  console.log(elementoLi)
  elementoLi.classList.add("product")
  console.log(elementoLi)
  if (imagem === undefined){
  imgLi.src = "./img/products/no-img.svg" 
}else{
  imgLi.src = imagem
}
  imgLi.alt   = nome
  imgLi.title = nome
  imgLi.classList.add("product-img")
  mainLi.classList.add("product-main")
  titleLi.classList.add("product-title")
  catLi.classList.add("product-category")
  precoLi.classList.add("product-price")
  titleLi.innerText = nome
  catLi.innerText   = cat
  precoLi.innerText = `R$${preco}`

  elementoLi.appendChild(imgLi)
  mainLi.append(titleLi, catLi, precoLi)
  elementoLi.appendChild(mainLi)

  return elementoLi
  
}
// console.log(criarLi(products))



/*<li class="product">
              <img
                src="./img/products/no-img.svg"
                alt=""
                title=""
                class="product-img"
              />
              <main class="product-main">
                <h1 class="product-title">Uva Crimson</h1>
                <h5 class="product-category">Frutas</h5>
                <strong class="product-price">R$ 8.99</strong>
              </main>
            </li>*/ 