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
      criaCor.style.backgroundColor = geraNumero(1, 256);
      listaDeCores.appendChild(criaCor);
    }
  }

  criaCores();

  //! Cria 6 círculos com uma cor dentro

  //? Requisito 2 - 5

  function geraNumero2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let corAleatoria = geraNumero2(1, 7) - 1;
  let paragrafo = document.querySelector('#rgb-color');
  function escreveCorAleatoria() {
    let listaCores = [];
    let cores = document.querySelectorAll('.ball');

    for (let posicao of cores) {
      let cor = posicao.style.backgroundColor;
      listaCores.push(cor);
    }
    paragrafo.innerHTML = listaCores[corAleatoria];
  }

  escreveCorAleatoria();

  //! Preenche os círculos com cores aleatórias e escreve uma delas como texto do paragrafo

  let escolherCor = document.querySelector('#lista-cores');
  escolherCor.addEventListener('click', function (evento) {
    if (evento.target.classList.value == 'ball') {
      if (evento.target.style.backgroundColor === paragrafo.innerHTML) {
        document.querySelector('#answer').innerHTML = 'Acertou!';
      } else {
        document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
      }
    }
  });
  //! Verifica se a cor clicada é a mesma que aparece no testo
};
