!function(){var t,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.disabled=!0,e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.disabled=!0,d.disabled=!1}),1e3)})),d.addEventListener("click",(function(){clearInterval(t),d.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.747e0b36.js.map
