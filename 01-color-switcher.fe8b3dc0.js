!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0,t.addEventListener("click",(function(){setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.fe8b3dc0.js.map
