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

