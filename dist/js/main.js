(()=>{"use strict";function e(e,t="+7 (__) --"){const l=document.querySelectorAll(e);function o(e){const l=e.keyCode,o=t,n=o.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let s=0,c=o.replace(/[_\d]/g,(function(e){return s<r.length?r.charAt(s++)||n.charAt(s):e}));s=c.indexOf("_"),-1!=s&&(c=c.slice(0,s));let i=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");i=new RegExp("^"+i+"$"),(!i.test(this.value)||this.value.length<5||l>47&&l<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of l)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}e("селектор элементов","маска, если маску не передать то будет работать стандартная +7 (__) --");(()=>{const e=document.querySelector(".up");e.style.opacity=0;const t=()=>{window.scrollY>0&&(window.scrollBy(0,-30),setTimeout(t,0))};window.addEventListener("scroll",(()=>{let t=document.querySelector("#services").getBoundingClientRect().top-100;(0==t||t<0)&&(e.style.opacity=1),t>0&&(e.style.opacity=0)})),e.addEventListener("click",t)})(),(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-close"),n=document.querySelector(".button-services"),r=document.querySelectorAll(".services-carousel > div > .element");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",l.style.display="block",document.querySelector(".mobile-menu").style.right=""}))})),n.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",l.style.display="block",document.querySelector(".mobile-menu").style.right=""})),r.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("img-wrapper")&&(t.style.display="block",l.style.display="block")}))})),o.addEventListener("click",(e=>{t.style.display="none",l.style.display="none"})),l.addEventListener("click",(()=>{t.style.display="none",l.style.display="none"}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".mobile-menu");e.addEventListener("click",(e=>{e.target.closest(".mob-menu-btn")?t.style.right=0:e.target.closest(".mobile-menu-close")||e.target.closest("ul > li")?t.style="":e.target.closest(".mobile-menu")||"0px"==t.style.right&&(t.style="")}))})(),(()=>{const t=document.createElement("div"),l=document.querySelectorAll(".form-control")[0],o=document.querySelectorAll(".form-control.tel.required")[0];e(".form-control.tel.required","+7 (___) ___-__-__"),l.addEventListener("input",(function(e){if(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s\-]/,""),e.target.value.length<2){const l=e.target;t.textContent="Введите более 2 символов",t.style.color="#e21717",t.style.fontSize="14px",t.style.position="absolute",t.style.bottom="55px",l.before(t)}else t.remove()})),o.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9+]/,"")}))})(),(({formName:e,someElem:t=[]})=>{const l=document.querySelector(e),o=document.createElement("div"),n="Ошибка ...",r=e=>{e.style.borderColor="#ff0000"},s=e=>{e.style.borderColor=null};try{if(!l)throw new Error("Вставьте пожалуйста форму!");l.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=l.querySelectorAll("input"),t=new FormData(l),c={};var i;o.textContent="Загрузка ...",o.style.color="#e9bb26",l.append(o),t.forEach(((e,t)=>{c[t]=e})),(e=>{let t=!0;return e.forEach((e=>{if(e.classList.contains("tel")){if(!e.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi))return r(e),t=!1,!1;s(e)}else if(e.classList.contains("form-control")){if(!e.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g))return r(e),t=!1,!1;s(e)}})),t})(e)?(i=c,fetch("http://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{o.textContent="Спасибо! Наш менеджер с Вами свяжется!",o.style.color="#19b5fe",e.forEach((e=>{e!=document.querySelector('input[value="Отправить"]')&&(e.value="")})),setTimeout((()=>{l.removeChild(o)}),4e3)})).catch((e=>{o.textContent=n,o.style.color="#ff0000",setTimeout((()=>{l.removeChild(o)}),4e3)})):(o.textContent=n,o.style.color="#ff0000",setTimeout((()=>{l.removeChild(o)}),4e3))})();const t=document.querySelector(".modal-callback"),c=document.querySelector(".modal-overlay");setTimeout((()=>{t.style.display="none",c.style.display="none"}),5e3)}))}catch(e){console.log(e.message)}})({formName:'[name="form-callback"]',someElem:[{type:"block"}]}),(()=>{const e=document.querySelector(".accordeon"),t=document.querySelectorAll(".accordeon > .element"),l=document.querySelectorAll(".accordeon > .element > .element-content");e.addEventListener("click",(e=>{if(e.target.closest(".element")){const o=e.target.closest(".element");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),l[t].style.display="block"):(e.classList.remove("active"),l[t].style.display="none")}))}}))})(),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".item"),l=document.querySelectorAll(".table");let o=0,n=null;const r=()=>{var e,n;(e=t)[n=o].classList.remove("active"),l[n].style.visibility="hidden",l[n].style.opacity=0,e[n].style.display="none",o++,o>=t.length&&(o=0),((e,t,o)=>{e[t].classList.add(o),l[t].style.visibility="visible",e[t].style.display="block",e[t].style.opacity=0,l[t].style.opacity=0,(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(r){let s=(r-o)/l;s>1&&(s=1);let c=e(s);t(c),s<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(o){l[t].style.opacity=o,e[t].style.opacity=o}});let n=setTimeout((()=>{let l=setInterval((()=>{if(e[t].style.opacity){let l=e[t].style.opacity-.05;e[t].style.opacity=l}(0==e[t].style.opacity||e[t].style.opacity<0)&&clearInterval(l)}),30);clearTimeout(n)}),2e3)})(t,o,"active")};e.style.backgroundColor="#000",l[0].style.visibility="visible",l[0].style.opacity=1,((e=1500)=>{n=setInterval(r,e)})(3e3)})(),(()=>{const e=document.querySelector(".services-elements"),t=document.querySelector(".services-carousel"),l=document.querySelector(".arrow-left"),o=document.querySelector(".arrow-right");let n=200,r=33.33333333,s=-100,c=0;e.style.overflow="hidden",t.style.display="inline-flex",t.style.position="relative",t.style.width=n+"%",t.style.marginLeft=0,t.style.left=0,t.style.transition="all ease .6s";const i=()=>{window.innerWidth>850?(c=0,n=200,r=33.33333333,s=-100,t.style.left=c+"%",t.style.width=n+"%"):window.innerWidth<850&&window.innerWidth>570?(c=0,n=300,r=50,s=-200,t.style.left=c+"%",t.style.width=n+"%"):window.innerWidth<570&&(c=0,n=600,r=100,s=-500,t.style.left=c+"%",t.style.width=n+"%")};l.addEventListener("click",(()=>{0!=c&&(c+=r,t.style.left=c+"%")})),o.addEventListener("click",(()=>{if(c<s+1)return c=0,void(t.style.left=c+"%");c-=r,t.style.left=c+"%"})),window.addEventListener("resize",i),i()})()})();