const titulo=document.querySelector(".digitando"),ativaMenu=document.querySelector(".fa-bars"),navMenu=document.querySelector("header .navegacao_primaria"),divExpleriencia=document.querySelectorAll(".experience_content div"),liExpleriencia=document.querySelectorAll(".experience_content ul li"),divEducation=document.querySelectorAll(".education_content div"),liEducation=document.querySelectorAll(".education_content ul li");function escrevendoLetra(){!function(a){const i=a.innerHTML.split("");a.innerHTML="",i.forEach((i,e)=>{setTimeout(()=>{a.innerHTML+=i},75*e)})}(titulo)}function sobreMim(){liExpleriencia.forEach((i,e)=>{i.addEventListener("click",()=>{var i;i=e,divExpleriencia.forEach(i=>{i.classList.remove("ativo")}),liExpleriencia.forEach(i=>{i.classList.remove("ativo")}),divExpleriencia[i].classList.add("ativo"),liExpleriencia[i].classList.add("ativo")})}),liEducation.forEach((i,e)=>{i.addEventListener("click",()=>{var i;i=e,divEducation.forEach(i=>{i.classList.remove("ativo")}),liEducation.forEach(i=>{i.classList.remove("ativo")}),divEducation[i].classList.add("ativo"),liEducation[i].classList.add("ativo")})}),divExpleriencia[0].classList.add("ativo"),liExpleriencia[0].classList.add("ativo"),divEducation[0].classList.add("ativo"),liEducation[0].classList.add("ativo")}ativaMenu.addEventListener("click",()=>{ativaMenu.classList.toggle("fa-x"),navMenu.classList.toggle("ativado")}),escrevendoLetra(),sobreMim();