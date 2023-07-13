// variaveis para a manipulação
const titulo            = document.querySelector(".digitando");
const ativaMenu         = document.querySelector(".fa-bars");
const navMenu           = document.querySelector("header .navegacao_primaria");
const divExpleriencia   = document.querySelectorAll(".experience_content div");
const liExpleriencia    = document.querySelectorAll(".experience_content ul li");
const divEducation      = document.querySelectorAll(".education_content div");
const liEducation       = document.querySelectorAll(".education_content ul li");
// função para digitalizar uma letra de cada vez
function escrevendoLetra() {
  function ativaletra(elemento) {
    const arrayTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrayTexto.forEach((l, i) => {
      setTimeout(() => {
        elemento.innerHTML += l;
      }, 75 * i);
    });
  }
  ativaletra(titulo);
}
ativaMenu.addEventListener("click", () => {
  ativaMenu.classList.toggle("fa-x");
  navMenu.classList.toggle("ativado");
});

function sobreMim() {
  // slides função para efeito
  function slideShow(i) {
    divExpleriencia.forEach((div) => {
      div.classList.remove("ativo");
    });
    liExpleriencia.forEach((div) => {
      div.classList.remove("ativo");
    });
    divExpleriencia[i].classList.add("ativo");
    liExpleriencia[i].classList.add("ativo");
  }

  function slideShoweducatio(i) {
    divEducation.forEach((div) => {
      div.classList.remove("ativo");
    });
    liEducation.forEach((div) => {
      div.classList.remove("ativo");
    });
    divEducation[i].classList.add("ativo");
    liEducation[i].classList.add("ativo");
  }

  // Criando os eventos de click
  liExpleriencia.forEach((e, i) => {
    e.addEventListener("click", () => {
      slideShow(i);
    });
  });

  liEducation.forEach((e, i) => {
    e.addEventListener("click", () => {
      slideShoweducatio(i);
    });
  });
  divExpleriencia[0].classList.add("ativo");
  liExpleriencia[0].classList.add("ativo");
  divEducation[0].classList.add("ativo");
  liEducation[0].classList.add("ativo");
}
escrevendoLetra();
sobreMim();
