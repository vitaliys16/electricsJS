(()=>{"use strict";(()=>{const e=document.querySelector(".up");e.style.opacity=0;const t=()=>{window.scrollY>0&&(window.scrollBy(0,-30),setTimeout(t,0))};window.addEventListener("scroll",(()=>{let t=document.querySelector("#services").getBoundingClientRect().top-100;(0==t||t<0)&&(e.style.opacity=1),t>0&&(e.style.opacity=0)})),e.addEventListener("click",t)})(),(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-close"),n=document.querySelector(".button-services"),s=document.querySelectorAll(".services-carousel > div > .element");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",l.style.display="block",document.querySelector(".mobile-menu").style.right=""}))})),n.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",l.style.display="block",document.querySelector(".mobile-menu").style.right=""})),s.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("img-wrapper")&&(t.style.display="block",l.style.display="block")}))})),o.addEventListener("click",(e=>{t.style.display="none",l.style.display="none"})),l.addEventListener("click",(()=>{t.style.display="none",l.style.display="none"}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".mobile-menu");e.addEventListener("click",(e=>{e.target.closest(".mob-menu-btn")?t.style.right=0:e.target.closest(".mobile-menu-close")||e.target.closest("ul > li")?t.style="":e.target.closest(".mobile-menu")||"0px"==t.style.right&&(t.style="")}))})(),(()=>{const e=document.createElement("div"),t=document.querySelectorAll(".form-control")[0],l=document.querySelectorAll(".form-control.tel.required")[0];t.addEventListener("input",(function(t){if(t.target.value=t.target.value.replace(/[^а-яА-ЯёЁ\s\-]/,""),t.target.value.length<2){const l=t.target;e.textContent="Введите более 2 символов",e.style.color="#e21717",e.style.fontSize="14px",e.style.position="absolute",e.style.bottom="55px",l.before(e)}else e.remove()})),l.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9+]/,"")}))})(),(({formName:e,someElem:t=[]})=>{const l=document.querySelector(e),o=document.createElement("div"),n="Ошибка ...",s=e=>{e.style.borderColor="#ff0000"},c=e=>{e.style.borderColor=null};try{if(!l)throw new Error("Вставьте пожалуйста форму!");l.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=l.querySelectorAll("input"),t=new FormData(l),r={};var i;o.textContent="Загрузка ...",o.style.color="#e9bb26",l.append(o),t.forEach(((e,t)=>{r[t]=e})),(e=>{let t=!0;return e.forEach((e=>{if(e.classList.contains("tel")){if(!e.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi))return s(e),t=!1,!1;c(e)}else if(e.classList.contains("form-control")){if(!e.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g))return s(e),t=!1,!1;c(e)}})),t})(e)?(i=r,fetch("http://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{o.textContent="Спасибо! Наш менеджер с Вами свяжется!",o.style.color="#19b5fe",e.forEach((e=>{e!=document.querySelector('input[value="Отправить"]')&&(e.value="")})),setTimeout((()=>{l.removeChild(o)}),4e3)})).catch((e=>{o.textContent=n,o.style.color="#ff0000",setTimeout((()=>{l.removeChild(o)}),4e3)})):(o.textContent=n,o.style.color="#ff0000",setTimeout((()=>{l.removeChild(o)}),4e3))})();const t=document.querySelector(".modal-callback"),r=document.querySelector(".modal-overlay");setTimeout((()=>{t.style.display="none",r.style.display="none"}),5e3)}))}catch(e){console.log(e.message)}})({formName:'[name="form-callback"]',someElem:[{type:"block"}]}),(()=>{const e=document.querySelector(".accordeon"),t=document.querySelectorAll(".accordeon > .element"),l=document.querySelectorAll(".accordeon > .element > .element-content");e.addEventListener("click",(e=>{if(e.target.closest(".element")){const o=e.target.closest(".element");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),l[t].style.display="block"):(e.classList.remove("active"),l[t].style.display="none")}))}}))})(),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".item"),l=document.querySelectorAll(".table");let o=0,n=null;const s=()=>{var e,n;(e=t)[n=o].classList.remove("active"),l[n].style.visibility="hidden",l[n].style.opacity=0,e[n].style.display="none",o++,o>=t.length&&(o=0),((e,t,o)=>{e[t].classList.add(o),l[t].style.visibility="visible",e[t].style.display="block",e[t].style.opacity=0,l[t].style.opacity=0,(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(s){let c=(s-o)/l;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(o){l[t].style.opacity=o,e[t].style.opacity=o}});let n=setTimeout((()=>{let l=setInterval((()=>{if(e[t].style.opacity){let l=e[t].style.opacity-.05;e[t].style.opacity=l}(0==e[t].style.opacity||e[t].style.opacity<0)&&clearInterval(l),clearTimeout(n)}),30)}),2e3)})(t,o,"active")};e.style.backgroundColor="#000",l[0].style.visibility="visible",l[0].style.opacity=1,((e=1500)=>{n=setInterval(s,e)})(3e3)})(),(()=>{const e=document.querySelector(".services-elements"),t=document.querySelector(".services-carousel"),l=document.querySelector(".arrow-left"),o=document.querySelector(".arrow-right");let n=200,s=33.33333333,c=-100,r=0;e.style.overflow="hidden",t.style.display="inline-flex",t.style.position="relative",t.style.width=n+"%",t.style.marginLeft=0,t.style.left=0,t.style.transition="all ease .6s";const i=()=>{window.innerWidth>850?(r=0,n=200,s=33.33333333,c=-100,t.style.left=r+"%",t.style.width=n+"%"):window.innerWidth<850&&window.innerWidth>570?(r=0,n=300,s=50,c=-200,t.style.left=r+"%",t.style.width=n+"%"):window.innerWidth<570&&(r=0,n=600,s=100,c=-500,t.style.left=r+"%",t.style.width=n+"%")};l.addEventListener("click",(()=>{0!=r&&(r+=s,t.style.left=r+"%")})),o.addEventListener("click",(()=>{if(r<c+1)return r=0,void(t.style.left=r+"%");r-=s,t.style.left=r+"%"})),window.addEventListener("resize",i),i()})()})();