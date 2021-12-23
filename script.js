window.onload = function () {
  //? Requisito 4

  //* Referencia para a function 'geraNumero' (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
  function geraNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return `rgb(${Math.floor(Math.random() * (max - min)) + min},${
      Math.floor(Math.random() * (max - min)) + min
    },${Math.floor(Math.random() * (max - min)) + min})`;
  }

  //! Function que gera uma cor aleatória

  //? Requisito 3

  function criaCores() {
    let listaDeCores = document.querySelector('#lista-cores');
    for (let index = 1; index <= 6; index += 1) {
      let criaCor = document.createElement('li');
      criaCor.classList.add('ball');
      criaCor.style.backgroundColor = geraNumero(1, 255);
      listaDeCores.appendChild(criaCor);
    }
  }

  criaCores();

  //! Cria 6 círculos com uma cor dentro
};
