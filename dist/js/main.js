(()=>{"use strict";(()=>{const e=document.querySelector(".up");e.style.opacity=0;const t=()=>{window.scrollY>0&&(window.scrollBy(0,-30),setTimeout(t,0))};window.addEventListener("scroll",(()=>{let t=document.querySelector("#services").getBoundingClientRect().top-100;(0==t||t<0)&&(e.style.opacity=1),t>0&&(e.style.opacity=0)})),e.addEventListener("click",t)})(),(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-close"),c=document.querySelector(".button-services"),n=document.querySelectorAll(".services-carousel > div > .element");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",l.style.display="block",document.querySelector(".mobile-menu").style.right=""}))})),c.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",l.style.display="block",document.querySelector(".mobile-menu").style.right=""})),n.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("img-wrapper")&&(t.style.display="block",l.style.display="block")}))})),o.addEventListener("click",(e=>{t.style.display="none",l.style.display="none"})),l.addEventListener("click",(()=>{t.style.display="none",l.style.display="none"}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".mobile-menu");e.addEventListener("click",(e=>{e.target.closest(".mob-menu-btn")?t.style.right=0:e.target.closest(".mobile-menu-close")||e.target.closest("ul > li")?t.style="":e.target.closest(".mobile-menu")||"0px"==t.style.right&&(t.style="")}))})(),(()=>{const e=document.createElement("div"),t=document.querySelectorAll(".form-control")[0],l=document.querySelectorAll(".form-control.tel.required")[0];t.addEventListener("input",(function(t){if(t.target.value=t.target.value.replace(/[^а-яА-ЯёЁ\s\-]/,""),t.target.value.length<2){const l=t.target;e.textContent="Введите более 2 символов",e.style.color="#e21717",e.style.fontSize="14px",e.style.position="absolute",e.style.bottom="55px",l.before(e)}else e.remove()})),l.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9+]/,"")}))})(),(({formName:e,someElem:t=[]})=>{const l=document.querySelector(e);console.log(l);const o=document.createElement("div"),c="Ошибка ...",n=e=>{e.style.borderColor="#ff0000"},r=e=>{e.style.borderColor=null};try{if(!l)throw new Error("Вставьте пожалуйста форму!");l.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=l.querySelectorAll("input"),t=new FormData(l),s={};var a;o.textContent="Загрузка ...",o.style.color="#e9bb26",l.append(o),t.forEach(((e,t)=>{s[t]=e})),(e=>{console.log("valVal");let t=!0;return e.forEach((e=>{if(e.classList.contains("tel")){if(!e.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi))return n(e),t=!1,!1;r(e)}else if(e.classList.contains("form-control")){if(!e.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g))return n(e),t=!1,!1;r(e)}})),t})(e)?(a=s,fetch("http://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{o.textContent="Спасибо! Наш менеджер с Вами свяжется!",o.style.color="#19b5fe",e.forEach((e=>{e!=document.querySelector('input[value="Отправить"]')&&(e.value="")})),setTimeout((()=>{l.removeChild(o)}),4e3)})).catch((e=>{o.textContent=c,o.style.color="#ff0000",setTimeout((()=>{l.removeChild(o)}),4e3)})):(o.textContent=c,o.style.color="#ff0000",setTimeout((()=>{l.removeChild(o)}),4e3))})();const t=document.querySelector(".modal-callback"),s=document.querySelector(".modal-overlay");setTimeout((()=>{t.style.display="none",s.style.display="none"}),5e3)}))}catch(e){console.log(e.message)}})({formName:'[name="form-callback"]',someElem:[{type:"block"}]}),(()=>{const e=document.querySelector(".accordeon"),t=document.querySelectorAll(".accordeon > .element"),l=document.querySelectorAll(".accordeon > .element > .element-content");e.addEventListener("click",(e=>{if(e.target.closest(".element")){const o=e.target.closest(".element");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),l[t].style.display="block"):(e.classList.remove("active"),l[t].style.display="none")}))}}))})()})();