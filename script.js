console.log("probando")

console.log(document)


// como analizar el documento (buscar elementos y sus propiedades)


// .querySelector() => buscar un nodo especifico en mi documento. siempre el primero que cumpla esa condición

let titleNode = document.querySelector("h1")
console.log(titleNode)
console.log(titleNode.innerText)


let segundoTitleNode = document.querySelector("#segundo-titulo")
console.log(segundoTitleNode)
console.log(segundoTitleNode.innerText)
console.log(segundoTitleNode.innerHTML)
console.log(segundoTitleNode.id)
console.log(segundoTitleNode.className)

// .querySelectorAll() => buscar todos los nodos del documento que cumplan una condicion.

let parrafoNodeList = document.querySelectorAll(".some-text")
console.log(parrafoNodeList)

// una lista de nodos (NodeList) es una estructura que parece un array pero no es un array
// - podemos acceder a cada elemento por su posición
// - podemos hacer loops tradicionales
// - podemos hacer el metodo forEach 
// - no podemos hacer más nada similar a arrays (slice, pop, filter, reduce) 

console.log(parrafoNodeList[2].innerText)

parrafoNodeList.forEach((cadaNodo) => {
  console.log(cadaNodo.innerText)
})

// busquedas anidadas

let cartasNodeList = document.querySelectorAll(".card")
console.log(cartasNodeList)

cartasNodeList.forEach((cadaCartaNode) => {
  console.log(cadaCartaNode)

  let parrafoEnCartaNode = cadaCartaNode.querySelector("p")
  console.log(parrafoEnCartaNode)

})



// Manipulación del DOM

const h3Node = document.querySelector("#h3-titulo")
console.log(h3Node)


// genero una accion en la página que hace que este cambio ocurra

// cuando el usuario clicke sobre el nodo, entonces el texto de ese mismo nodo cambiará
h3Node.addEventListener("click", () => {
  h3Node.innerText = "cambiando valor del titulo"
})

let buttonNode = document.querySelector("#increment")
let countNode = document.querySelector("#count h2 span")
console.log(countNode)


buttonNode.addEventListener("click", () => {
  // countNode.innerText = parseInt(countNode.innerText) + 1
  countNode.innerText++
})

// borrar y crear elementos

const deleteBtnNode = document.querySelector("#delete-btn")

deleteBtnNode.addEventListener("click", () => {

  console.log("clickando")
  deleteBtnNode.remove() // sale de la visualización

  // const body = document.querySelector("body")
  // body.remove()

})

const inputNode = document.querySelector("#name")
const addBtnNode = document.querySelector("#add-form button")
const ulNode = document.querySelector("#add-list")

// evento que al clickar el boton algo pasa
addBtnNode.addEventListener("click", () => {

  // cual será el valor del input
  // en inputs no existe el innerText o innerHTML

  let valorParaAgregar = inputNode.value

  // como lo agregamos

  // ulNode.innerText = valorParaAgregar
  // 1. creando el nodo y añadiendolo al nodo padre
  // const nuevoLiNode = document.createElement("li")
  // nuevoLiNode.innerText = valorParaAgregar
  // console.log(nuevoLiNode)
  // ulNode.append(nuevoLiNode) // añade un nodo a otro

  // 2.
  ulNode.innerHTML += `<li>${valorParaAgregar}</li>`

})


const sectionNode = document.querySelector("#final-section")
console.log(sectionNode)

sectionNode.addEventListener("click", () => {

  // sectionNode.className = "container green-container"

  // classList

  // sectionNode.classList.add("green-container") // añade una nueva clase
  // sectionNode.classList.remove("blue-container") // añade una nueva clase

  sectionNode.classList.toggle("blue-container") // remueve la clase si existia y añadela si no existia
  sectionNode.classList.toggle("green-container")

})


const stylesBtnNode = document.querySelector("#styles-btn")
const eventTitleNode = document.querySelector("#event-title")

stylesBtnNode.addEventListener("click", () => {

  // eventTitleNode.innerText = "Cambiando texto"

  // console.log(eventTitleNode.style)
  eventTitleNode.style.color = "blue"
  eventTitleNode.style.backgroundColor = "red"
  eventTitleNode.style.margin = "20px"
  eventTitleNode.style.padding = "30px"
  eventTitleNode.style.border = "solid 2px black"
  eventTitleNode.style.borderRadius = "10px"

})