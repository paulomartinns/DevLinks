function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Paulo Martins Sorrindo, usando camisa branca, short cinza. "
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Paulo Martins com a cabeça de lado, usando um bone, uma camisa preta, um short branco, com uma bolsa rosa de croche de sua amiga e segurando uma água voss. "
    )
  }
}
