(()=>{var e={850:(e,t,r)=>{"use strict";r.r(t)},279:(e,t,r)=>{"use strict";r.r(t)}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(850),r(279),(()=>{function e(e,t,r){Array.from(e).forEach((e=>{e.addEventListener(t,r)}))}function t(t){let r=t.querySelector(".section__tab_active").dataset.id;const i=t.querySelectorAll(".section__tab"),a=Array.from(i).map((e=>e.dataset.id)),n=t.querySelector(".section__select");function o(e){const i=t.querySelector(`.section__tab[data-id=${e}]`),a=t.querySelector(`.section__panel[data-id=${e}]`),o=t.querySelector(".section__tab_active"),s=t.querySelector(".section__panel:not(.section__panel_hidden)");r=e,o.classList.remove("section__tab_active"),o.setAttribute("aria-selected","false"),o.removeAttribute("tabindex"),i.classList.add("section__tab_active"),i.setAttribute("aria-selected","true"),i.setAttribute("tabindex","0"),i.focus({preventScroll:!0}),s.classList.add("section__panel_hidden"),s.setAttribute("aria-hidden","true"),a.classList.remove("section__panel_hidden"),a.setAttribute("aria-hidden","false"),n.value=e}n.addEventListener("input",(()=>{o(n.value)})),e(i,"click",(e=>{o(e.target.dataset.id)})),e(i,"keydown",(e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=a.indexOf(r);if(37===e.which)--t;else if(39===e.which)++t;else if(36===e.which)t=0;else{if(35!==e.which)return;t=a.length-1}t>=a.length?t=0:t<0&&(t=a.length-1),o(a[t]),e.preventDefault()}))}function r(e){let t=!1;const r=document.querySelector(".header__links");e.addEventListener("click",(()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),e.querySelector(".header__menu-text").textContent=t?"Закрыть меню":"Открыть меню",r.classList.toggle("header__links_opened",t),r.classList.add("header__links-toggled")}))}document.addEventListener("DOMContentLoaded",(()=>{Array.from(document.querySelectorAll(".main__devices")).forEach(t),Array.from(document.querySelectorAll(".header__menu")).forEach(r)}))})()})();